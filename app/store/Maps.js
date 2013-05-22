Ext.define("StudentApp.store.Maps", {
	extend: "Ext.data.Maps",
	model: "StudentApp.model.Maps",
	proxy: {
		type: "ajax",
		url: "http://www.city.ac.uk/visit/feeds/locationsWebapp.json?callback=?",
		reader: {
			type: "json"
		}
	},
	autoLoad: true
});