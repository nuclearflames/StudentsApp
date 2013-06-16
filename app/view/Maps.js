Ext.define("StudentApp.view.Maps", {
    extend:'Ext.Container',
    alias: "widget.mapsview",
    xtype: "mapsview",
    config: {
        layout: 'hbox',
        fullscreen: true,
        items: [{
            xtype: "container",
            flex: 2,
            items: [{
                xtype: "fieldset",
                layout: "hbox",
                items: [{
                    flex: 5,
                    xtype: "button",
                    text: 'Home',
                    ui: "back",
                    id: "home",
                    margin: 20
                },{
                    flex: 5,
                    xtype: "label",
                    html: "<u>City University Maps</u>",
                    margin: 20
                }]
            },{
                xtype: "fieldset",
                items: [{
                    xtype: "button",
                    text: "Lecture Theatres",
                    id: "lectureTheatresBtn",
                    margin: 5
                },{
                    xtype: "button",
                    text: "Accomodation",
                    id: "accomodationBtn",
                    margin: 5
                },{
                    xtype: "button",
                    text: "Libraries",
                    id: "libariesBtn",
                    margin: 5
                },{
                    xtype: "button",
                    text: "Computer Rooms",
                    id: "computerRoomsBtn",
                    margin: 5
                },{
                    xtype: "button",
                    text: "Student Services",
                    id: "studentServicesBtn",
                    margin: 5
                },{
                    xtype: "fieldset",
                    items: [{
                        xtype: "label",
                        html: "<h1>Find a place</h1>",
                        id: "studentServicesBtn",
                        margin: 5
                    },{
                        xtype: "searchfield",
                        id: "findPlaceSearch",
                        margin: 5
                    }]
                }]
            }]
        },{
            docked: "right",
            width: "10%",
            xtype: "list",
            title: "Places",
            itemTpl: "<div class='mapsList'><p>{title}<br /><a href='{link}' target='_blank'>Extra information</a></p></div>",
            margin: 5,
            store: "Maps"
        },{
            flex: 7,
            xtype: "fieldset",
            layout: "fit",
            items: [{
                id: "map"
            }]
        }]
    },
    initialize: function() {
        //Ajax all data on page load
        $.ajax({
            type: "GET",
            url: "https://www.city.ac.uk/visit/feeds/locationsWebapp.json?callback=?",
            async: false,
            jsonpCallback: "jsonCallback",
            contentType: "application/json",
            dataType: "jsonp",
            success: function(jsonP) {
                json = jsonP.buildings;

                //Will setup the default view for the map
                var
                mapOptions = {
                    zoom: 17,
                    center: mapCenter,
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                init = function(b) {
                //Build the map
                gMap = new google.maps.Map(Ext.get("map").dom, mapOptions);
                    $.each(b, function(i, v){
                        processContent(i, v);
                        processMarkers(i, v);
                    });
                };

                // Try W3C Geolocation (Preferred)
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                        gMap.setCenter(initialLocation);
                    });
                }
                init(json);

                //Maps jquery function
                $(".x-list-item").click(function () {
                    $number = $(this).attr("id").replace("ext-simplelistitem-", "");
                    google.maps.event.trigger(markers[$number-1], "mousedown");
                    markers[$number-1].setMap(gMap);
                });
            },
            error: function(e) {
                error = e;
                console.error(error.message);
            }
        });
    }
});