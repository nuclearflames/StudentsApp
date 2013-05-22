Ext.define("StudentApp.view.Maps", {
	extend:'Ext.Container',
	alias: "widget.mapsview",
	xtype: "mapsview",
	config: {
		layout: 'vbox',
		fullscreen: true,
		items: [{
			xtype: "panel",
			flex: 1,
			items: [{
				xtype: "button",
				text: 'Maps',
				ui: "back",
				id: "home"
			}]
		},{
			xtype: "panel",
			layout: "fit",
			flex: 8,
			items: [{
				xtype: "map",
				useCurrentLocation: false,
				id: "map",
				mapOptions: {
					zoom: 17,
					center: new google.maps.LatLng(51.527361,-0.102365),
					mapTypeId: google.maps.MapTypeId.ROADMAP
				}
			}]
		},{
			xtype: "panel",
			layout: "fit",
			docked: "left",
			width: 200,
			items: [{
				html: "Find a place",
				id: "findPlaceBtn"
			},{
				html: "Lecture Theatres",
				id: "lectureTheatresBtn"
			},{
				html: "Accomdation",
				id: "accomodationBtn"
			},{
				html: "Libraries",
				id: "libariesBtn"
			},{
				html: "Computer Rooms",
				id: "computerRoomsBtn"
			},{
				html: "Student Services",
				id: "studentServicesBtn"
			}]
		}]
	},
	initialize: function() {
		//inline styles ftm
		var gMap= Ext.get("map"),
		init = function(b) {
			$.each(b, function(i, v){
				processContent(i, v);

			});
        console.log(polygons);
		},
		polygons = [],
        processContent = function(i, v) {
            //Parse all multiple spaces in string
            var string = v.polygon.replace(/\s{2,}/g, " "),
            polygonBuild = [],
            polygonsBuild = [],
            tmp = "", j;
            polygonBuild = string.split(" ");
            //loop through and format the latlng into google valid latlngs
            for(j = 0; j < polygonBuild.length; j += 2) {
                tmp += "new google.maps.LatLng("+polygonBuild[j]+","+ polygonBuild[j+1]+"),";
            }
            polygonsBuild.push(tmp);
            polygons.push("[" + polygonsBuild + "]");
        };
		$.ajax({
			type: "GET",
			url: "https://www.city.ac.uk/visit/feeds/locationsWebapp.json?callback=?",
			async: false,
			jsonpCallback: "jsonCallback",
			contentType: "application/json",
			dataType: "jsonp",
			success: function(json) {
				console.log(json);
				init(json.buildings);
			},
			error: function(e) {
				console.error(e.message);
			}
		});
		$("body").css("color","black");


	}
});