Ext.define("StudentApp.view.Maps", {
    extend:'Ext.Container',
    alias: "widget.mapsview",
    xtype: "mapsview",
    config: {
        layout: 'hbox',
        fullscreen: true,
        items: [{
            width: "50%",
            xtype: "fieldset",
            layout: "fit",
            items: [{
                id: "map"
            }]
        },{
            xtype: "fieldset",
            docked: "top",
            layout: "hbox",
            items: [{
                flex: 5,
                xtype: "button",
                text: 'Home',
                iconCls: "home",
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
            flex: 2,
            xtype: "fieldset",
            layout: "vbox",
            items: [{
                xtype: "fieldset",
                items: [{
                    xtype: "button",
                    text: "Lecture Theatres",
                    id: "lectureTheatresBtn",
                    iconCls: "lecture",
                    margin: 5
                },{
                    xtype: "button",
                    text: "Accomodation",
                    id: "accomodationBtn",
                    iconCls: "accomodation",
                    margin: 5
                },{
                    xtype: "button",
                    text: "Libraries",
                    id: "libariesBtn",
                    iconCls: "library",
                    margin: 5
                },{
                    xtype: "container",
                    layout: "hbox",
                    items: [{
                        flex: 5,
                        xtype: "button",
                        text: "Computer Rooms",
                        id: "computerRoomsBtn",
                        iconCls: "computer",
                        margin: 5
                    },{
                        flex: 5,
                        xtype: "button",
                        text: "Student Services",
                        id: "studentServicesBtn",
                        iconCls: "services",
                        margin: 5
                    }]
                },{
                    xtype: "fieldset",
                    items: [{
                        label: "Search",
                        xtype: "searchfield",
                        id: "findPlaceSearch",
                        margin: 5
                    }]
                }]
            },{
                flex: 5,
                xtype: "list",
                title: "Places",
                itemTpl: "<div class='mapsList'><p>{title}<br /><a href='{link}' target='_blank'>Extra information</a></p></div>",
                margin: 5,
                store: "Maps"
            }]
        }],
        listeners: {
            show: function() {
                setSettings();                
            }
        }
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
                            google.maps.event.trigger(markers[i], "mousedown");
                            markers[i].setMap(gMap);
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