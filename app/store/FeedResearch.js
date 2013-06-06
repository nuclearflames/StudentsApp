Ext.define("StudentApp.store.FeedResearch", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.Feed",
	proxy: {
		type: "ajax",
		url: "app/scripts/rssfeed.php?research",
		reader: {
			type: "json"
		}
	},
	autoLoad: true
});