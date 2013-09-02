//Initialise the controller
Ext.define("StudentApp.controller.Maps", {
    extend: "Ext.app.Controller",
    gMap: Ext.get("map"),
    config: {
        routes: {
            "map": "showView",
            "maps": "showView"
        },
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
            "#lectureTheatresBtn": {
                tap: "lectureTheatresBtnAction"
            },
            "#accomodationBtn": {
                tap: "accomodationBtnAction"
            },
            "#libariesBtn": {
                tap: "libariesBtnAction"
            },
            "#computerRoomsBtn": {
                tap: "computerRoomsBtnAction"
            },
            "#studentServicesBtn": {
                tap: "studentServicesBtnAction"
            },
            "#findPlaceSearch": {
                keyup: "findPlaceSearchAction"
            }
        }
    },
    showView: function(e) {
        Ext.Viewport.setActiveItem("mapsview");
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
    //Lecture theatres button action
    lectureTheatresBtnAction: function() {
        $.each(json, function(i, v){
            markers[i].setMap(null);
            if(v.category === "lectureTheatres") {
                markers[i].setMap(gMap);
            }
        });
        gMap.setZoom(17);
        gMap.setCenter(mapCenter);
    },
    //Accomodation button action
    accomodationBtnAction: function() {
        $.each(json, function(i, v){
            markers[i].setMap(null);
            if(v.category === "accommodation") {
                markers[i].setMap(gMap);
            }
        });
        gMap.setZoom(15);
        gMap.setCenter(mapCenter);
    },
    //Libraries button action
    libariesBtnAction: function() {
        $.each(json, function(i, v){
            markers[i].setMap(null);
            if(v.category === "publicLibraries" || v.category === "") {
                markers[i].setMap(gMap);
            }
        });
        gMap.setCenter(mapCenter);
    },
    //Computer Rooms button action
    computerRoomsBtnAction: function() {
        $.each(json, function(i, v){
            markers[i].setMap(null);
            if(v.category === "computerLabs") {
                markers[i].setMap(gMap);
            }
        });
        gMap.setCenter(mapCenter);
    },
    //Student Services button action
    studentServicesBtnAction: function() {
        $.each(json, function(i, v){
            markers[i].setMap(null);
            if(v.category === "studentCentre") {
                markers[i].setMap(gMap);
            }
        });
        gMap.setCenter(mapCenter);
    },
    //Filter the list based on search field
    findPlaceSearchAction: function() {
        var val = Ext.ComponentMgr.get("findPlaceSearch").getValue();
        var store = Ext.getStore("Maps");
        store.clearFilter();
        store.filter("title", val);
    }
});