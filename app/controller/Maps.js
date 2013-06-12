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
	},
	accomodationBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "accommodation") {
				markers[i].setMap(gMap);
			}
			gMap.setZoom(15);
		});
	},
	libariesBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "publicLibraries" || v.category === "") {
				markers[i].setMap(gMap);
			}
		});
	},
	computerRoomsBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "computerLabs") {
				markers[i].setMap(gMap);
			}
		});
	},
	studentServicesBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "studentCentre") {
				markers[i].setMap(gMap);
			}
		});
	},
	init: function() {
	}
});