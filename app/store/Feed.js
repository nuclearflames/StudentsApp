//Initilize the data for the store
//Get the data by ajax to script
Ext.define("StudentApp.store.Feed", {
	extend: "Ext.data.Store",
	config: {
		model: "StudentApp.model.Feed",
		proxy: {
			type: "ajax",
			url: "app/scripts/rssfeed.php?",
			reader: {
				type: "json"
			}
		},
		autoLoad: true
	}
});