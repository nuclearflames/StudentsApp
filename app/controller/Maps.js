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
		console.log(gMap);
	},
	lectureTheatresBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "lectureTheatres") {
				markers[i].setMap(gMap);
			}
		});
	},
	accomodationBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "accommodation") {
				markers[i].setMap(gMap);
			}
		});
	},
	libariesBtnAction: function() {
		$.each(json, function(i, v){
			markers[i].setMap(null);
			if(v.category === "lectureTheatres" || v.category === "publicLibraries" || v.category === "") {
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
		//Ajax all data on program load
		$.ajax({
			type: "GET",
			url: "https://www.city.ac.uk/visit/feeds/locationsWebapp.json?callback=?",
			async: false,
			jsonpCallback: "jsonCallback",
			contentType: "application/json",
			dataType: "jsonp",
			success: function(jsonP) {
				json = jsonP.buildings;
			},
			error: function(e) {
				error = e;
				console.error(error.message);
			}
		});
	}
});