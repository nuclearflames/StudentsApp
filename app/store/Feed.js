Ext.define("StudentApp.store.Feed", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.Feed",
	proxy: {
		type: "ajax",
		url: "app/scripts/rssfeed.php?",
		reader: {
			type: "json"
		}
	},
	autoLoad: true
});