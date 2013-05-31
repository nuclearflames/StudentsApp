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
				text: 'Maps',
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
		//Will setup the default view for the map
		var
		infoWindow,
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
		},
		processContent = function(i, v) {
			//Parse all multiple spaces in string
			var
			string = v.polygon.replace(/\s{2,}/g, " "),
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
		},
		processMarkers = function(i, v) {
			var
			latLngBuild = new google.maps.LatLng(parseFloat(v.geoLat), parseFloat(v.geoLong)),
            description = unescape(v.description.replace(/\+/g, " ")),
			marker = new google.maps.Marker({
				position: latLngBuild,
				animation: google.maps.Animation.DROP,
				title: v.title,
				icon: v.icon
			});
			markers.push(marker);
			if(v.category === "buildings") {
				marker.setMap(gMap);
			}
			google.maps.event.addListener(marker, "mousedown", function() {
				if(infoWindow) { infoWindow.close(); }
				infoWindow = new google.maps.InfoWindow({content: "<b>" + v.title + "</b><br />" + description, maxWidth: 300});
				infoWindow.open(gMap, marker);
			});
		};

		//Build the map
		gMap = new google.maps.Map(Ext.get("map").dom, mapOptions);

		init(json);
	}
});