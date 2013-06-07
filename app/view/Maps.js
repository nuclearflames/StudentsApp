Ext.define("StudentApp.view.Maps", {
    extend:'Ext.Container',
    alias: "widget.mapsview",
    xtype: "mapsview",
    config: {
        layout: 'hbox',
        fullscreen: true,
        items: [{
            xtype: "panel",
            flex: 3,
            items: [{
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home"
            },{
                xtype: "button",
                text: "Find a place",
                id: "findPlaceBtn"
            },{
                xtype: "button",
                text: "Lecture Theatres",
                id: "lectureTheatresBtn"
            },{
                xtype: "button",
                text: "Accomodation",
                id: "accomodationBtn"
            },{
                xtype: "button",
                text: "Libraries",
                id: "libariesBtn"
            },{
                xtype: "button",
                text: "Computer Rooms",
                id: "computerRoomsBtn"
            },{
                xtype: "button",
                text: "Student Services",
                id: "studentServicesBtn"
            }]
        },{
            xtype: "panel",
            layout: "fit",
            flex: 7,
            items: [{
                id: "map"
            }]
        }]
    },
    blogBtnAction: function() {
        Ext.Viewport.setActiveItem("blogview");
        //Ext.getCmp("content").setActiveItem("loginview");
        //Ext.Viewport.setActiveItem(Ext.create("StudentApp.view.Maps"));
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
                    center: new google.maps.LatLng(51.527361,-0.102365),
                    mapTypeId: google.maps.MapTypeId.ROADMAP
                },
                init = function(b) {
                    $.each(b, function(i, v){
                        processContent(i, v);
                        processMarkers(i, v);
                    });
                };

                //Build the map
                gMap = new google.maps.Map(Ext.get("map").dom, mapOptions);

                // Try W3C Geolocation (Preferred)
                if (navigator.geolocation) {
                    navigator.geolocation.getCurrentPosition(function(position) {
                        initialLocation = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);
                        gMap.setCenter(initialLocation);
                    });
                }
                init(json);

            },
            error: function(e) {
                error = e;
                console.error(error.message);
            }
        });
    }
});