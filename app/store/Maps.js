Ext.define("StudentApp.store.Maps", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.Maps",
	proxy: {
		type: "ajax",
		url: "app/scripts/maps.php?",
		reader: {
			type: "json",
			rootProperty: "buildings"
		}
	},
	autoLoad: true
});