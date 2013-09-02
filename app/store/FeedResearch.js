//Initilize the data for the store
//Get the data by ajax to script
Ext.define("StudentApp.store.FeedResearch", {
	extend: "Ext.data.Store",
	config: {
		model: "StudentApp.model.Feed",
		proxy: {
			type: "ajax",
			url: "app/scripts/rssfeed.php?research",
			reader: {
				type: "json"
			}
		},
		autoLoad: true
	}
});