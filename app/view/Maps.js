Ext.define("StudentApp.view.Maps", {
    extend:'Ext.Container',
    alias: "widget.mapsview",
    xtype: "mapsview",
    config: {
        layout: 'hbox',
        fullscreen: true,
        items: [{
            xtype: "fieldset",
            flex: 3,
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
                    xtype: "button",
                    text: "Find a place",
                    id: "findPlaceBtn",
                    margin: 5
                },{
                    xtype: "list",
                    title: "Places",
                    id: "searchList",
                    itemTpl: "{title}",
                    margin: 5,
                    store: "Maps"
                }]
            }]
        },{
            xtype: "fieldset",
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
                        updateStore(i, v);
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