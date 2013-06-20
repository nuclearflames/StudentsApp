Ext.define("StudentApp.controller.Maps", {
	extend: "Ext.app.Controller",
	gMap: Ext.get("map"),
	config: {
		control: {
			"#findPlaceBtn": {
				tap: "findPlaceBtnAction"
			},
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
	slideLeftTransition: {
		type: 'slide', direction: 'left'
	},
	slideRightTransition: {
		type: 'slide', direction: 'right'
	},
	findPlaceBtnAction: function() {
		console.log(Ext.getStore("Maps"));
	},
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
	libariesBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "publicLibraries" || v.category === "") {
				markers[i].setMap(gMap);
			}
		});
    	gMap.setCenter(mapCenter);
	},
	computerRoomsBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "computerLabs") {
				markers[i].setMap(gMap);
			}
		});
    	gMap.setCenter(mapCenter);
	},
	studentServicesBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "studentCentre") {
				markers[i].setMap(gMap);
			}
		});
    	gMap.setCenter(mapCenter);
	},
	findPlaceSearchAction: function() {
        var val = Ext.ComponentMgr.get("findPlaceSearch").getValue();
        var store = Ext.getStore("Maps");
        store.clearFilter();
        store.filter("title", val);
	},
	init: function() {
	}
});