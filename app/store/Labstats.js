Ext.define("StudentApp.store.Labstats", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.Labstats",
	proxy: {
		type: "ajax",
		url: "app/scripts/labstats.php?",
		reader: {
			type: "json",
			params: "cass-rooms",
			root: "rows"
		}
	},
	autoLoad: false
});