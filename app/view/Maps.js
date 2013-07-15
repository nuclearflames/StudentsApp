//Initialize the view
Ext.define("StudentApp.view.Maps", {
    extend:'Ext.Container',
    alias: "widget.mapsview",
    xtype: "mapsview",
    config: {
        //This sets the design of the page onload
        layout: 'vbox',
        fullscreen: true,
        items: [{
            height: "100px",
            xtype: "fieldset",
            layout: "vbox",
            cls: "expandMenu",
            items: [{
                layout: "hbox",
                items: [{
                    flex: 3,
                    xtype: "button",
                    text: 'Home',
                    iconCls: "home",
                    id: "home",
                    margin: 20
                },{
                    flex: 7,
                    xtype: "label",
                    html: "<h3><u>City University Maps</u></h3>",
                    margin: 20
                },{
                    xtype: "panel",
                    docked: "right",
                    width: "30%",
                    items: [{
                        xtype: "button",
                        text: 'Menu',
                        iconCls: "menu",
                        id: "menu",
                        action: "menuExpand",
                        margin: 20
                    }]
                }]
            },{
                flex: 5,
                layout: "fit",
                xtype: "panel",
                items: [{
                    layout: "hbox",
                    scrollable: {
                        direction: 'vertical',
                        directionLock: true
                    },
                    items: [{
                        flex: 5,
                        xtype: "panel",
                        items: [{
                            xtype: "button",
                            text: "Lecture Theatres",
                            id: "lectureTheatresBtn",
                            iconCls: "lecture"
                        },{
                            xtype: "button",
                            text: "Accomodation",
                            id: "accomodationBtn",
                            iconCls: "accomodation"
                        },{
                            xtype: "button",
                            text: "Libraries",
                            id: "libariesBtn",
                            iconCls: "library"
                        },{
                            xtype: "button",
                            text: "Computer Rooms",
                            id: "computerRoomsBtn",
                            iconCls: "computer"
                        },{
                            xtype: "button",
                            text: "Student Services",
                            id: "studentServicesBtn",
                            iconCls: "services"
                        },{
                            xtype: "fieldset",
                            items: [{
                                label: "Search",
                                xtype: "searchfield",
                                id: "findPlaceSearch"
                            }]
                        }]
                    },{
                        layout: "fit",
                        flex: 5,
                        items: [{
                            scrollable: {
                                direction: 'vertical',
                                directionLock: true
                            },
                            xtype: "list",
                            title: "Places",
                            itemTpl: "<div class='mapsList'><p>{title}<br /><a href='{link}' target='_blank'>Extra information</a></p></div>",
                            margin: 5,
                            store: "Maps"
                        }]
                    }]
                }]
            }]
        },{
            flex: 8,
            xtype: "fieldset",
            layout: "fit",
            items: [{
                layout: "fit",
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
                    $number = $(this).find("p:first").contents()[0].data;
                    for (i=0;i<markers.length;i++) {
                        if(markers[i].title === $number) {
                            markers[i].setMap(gMap);
                            console.log((markers[i]));
                            gMap.setCenter(markers[i].position);
                        }
                    }
                });
                //Store Clearer
                $(".x-clear-icon").click(function() {
                    var store = Ext.getStore("Maps");
                    store.clearFilter();
                });
            },
            error: function(e) {
                error = e;
                console.error(error.message);
            }
        });
    }
});