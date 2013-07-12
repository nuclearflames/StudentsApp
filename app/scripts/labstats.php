<?php

/**
 * This file fetches data from Matrix (lab metadata) and the Labstats API
 * (computer terminal availability) mashes them together and returns JSON(P).
 *
 */
ini_set('display_errors', FALSE);
error_reporting(E_ALL);

/**
 * Setup the config variables used in the file
 */
define('CACHE_FILE', 'cache/labstats.cache');
define('CACHE_TIME', 24 * 60 * 60);

define('MATRIX_URL', 'http://www.city.ac.uk/apis/labstats.xml/_nocache');

//Creates a SOAP Connection (Change URL to match your installation
$pcData = new SoapClient("http://nsq209ap.enterprise.internal.city.ac.uk/LabStats/WebServices/Statistics.asmx?WSDL");

$bReCache = TRUE;

// Check the cache file exists
if (file_exists(CACHE_FILE)) {
    $aFile = @unserialize(file_get_contents(CACHE_FILE));
    if (is_array($aFile) && isset($aFile['update']) && isset($aFile['xml'])) {
        if ($aFile['update'] - CACHE_TIME < time()) {
            $sXML = $aFile['xml'];
            $bReCache = FALSE;
        }
    }
}

// Does the system need to recache?
if ($bReCache || (isset($_GET['recache']) && 'true' == $_GET['recache'])) {
    $sXML = file_get_contents(MATRIX_URL);
    // Try and write the cache file
    @file_put_contents(
        CACHE_FILE, serialize(
            array(
                'update' => time(),
                'xml' => $sXML
            )
        )
    );
}

// Turn the matrix metadata xml string into a SimpleXMLElement
$oXml = new SimpleXMLElement($sXML);
$aLabs = array();
$value = array();
$pageTypeisCass = isset($_GET['cass-rooms']);
$pageTypeisLawRooms = isset($_GET['law-rooms']);
$pageTypeisHealthRooms = isset($_GET['health-rooms']);

// Only iterate items with a labstat id
foreach ($oXml->xpath('lab[location/labstat/id>0]') as $oLab) { // select labs with a labstatid
    $aLabs[(int) $oLab->location->labstat->id] = $oLab;
}

$sXML = file_get_contents(MATRIX_URL);
$oXml = new SimpleXMLElement($sXML);
//paramater matching to determine the type of lab area to load
if (isset($_GET['id'])) {
    foreach ($oXml->xpath("lab/location[labstat/id='" . $_GET['id'] . "']") as $oLab) {
        array_push($value, $oLab->labstat->id);
    }
} elseif ($pageTypeisCass) {
    foreach ($oXml->xpath("lab/location[labstat/campus='Cass Buisness School']") as $oLab) {
        array_push($value, $oLab->labstat->id);
    }
} elseif ($pageTypeisLawRooms) {
    foreach ($oXml->xpath("lab/location[labstat/campus='Grays Inn']") as $oLab) {
        array_push($value, $oLab->labstat->id);
    }
} elseif ($pageTypeisHealthRooms) {
    foreach ($oXml->xpath("lab/location[labstat/campus='School of Health Sciences']") as $oLab) {
        array_push($value, $oLab->labstat->id);
    }
} else {
    foreach ($oXml->xpath("lab/location[labstat/campus='Northampton Square']") as $oLab) {
        array_push($value, $oLab->labstat->id);
    }
}

// define Lab class
class Lab {

    public $id = 0;
    public $name = '';
    public $inUse = 0;
    public $offline = 0;
    public $available = 0;
    public $last_updated = '';

}

//Retrieve the SOAP path
$pcData = $pcData->GetGroupedCurrentStats()->GetGroupedCurrentStatsResult->GroupStat;

//Escape if no data
if (!$pcData) {
    exit(json_encode("NULL"));
}

//Merge the matrix metadata and the soap stream then convert to JSON object
$aReturn = array();
foreach ($pcData as $oLab) {
    for ($i = 0; $i < count($value); $i++) {
        if ((int)$oLab->groupId === (int)$value[$i]) {
            $oTmpLab = new Lab();
            // Map the attributes over to the temp object
            $iLabStatId = $oTmpLab->id = $oLab->groupId;
            $oTmpLab->name = (string) $oLab->groupName;
            if(date("d/m/Y H:i:s") >= $aLabs[$iLabStatId]->location->labstat->bookedFrom && $aLabs[$iLabStatId]->location->labstat->bookedTill >= date("d/m/Y H:i:s")) {
                $oTmpLab->inUse = (int) $oLab->totalCount;
                $oTmpLab->available = 0;
            } else {
                $oTmpLab->inUse = (int) $oLab->inUseCount;
                $oTmpLab->available = (int) $oLab->availableCount;
            }
            $oTmpLab->offline = (int) $oLab->offCount;
            //Include even switched off pc's as available
            $oTmpLab->offCount = (int) $oLab->offCount;
            $oTmpLab->last_updated = (string) date('c');
            if (array_key_exists($iLabStatId, $aLabs)) {
                $oTmpLab->asset = $aLabs[$iLabStatId];
                $url = explode("/", $oTmpLab->asset->url);
                $oTmpLab->asset->name = end($url);
            }
            array_push($aReturn, $oTmpLab);
        }
    }
}

//Send code to JSON object
$sJSON = json_encode($aReturn);

//Send as JSONP object back to webpage
//Prepare response and set headers
if (isset($_GET['callback'])) { // jsonp
    header('Content-Type: text/javascript');
    exit(sprintf('%s(%s)', $_GET['callback'], $sJSON));
} else { // json
    header('Content-Type: application/json');
    exit($sJSON);
}

?>