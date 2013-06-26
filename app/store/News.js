//Initilize the data for the store
//Get the data by ajax to script
Ext.define("StudentApp.store.News", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.News",
	proxy: {
		type: "ajax",
		url: "app/scripts/news.php?",
		reader: {
			type: "json",
			rootProperty: "response.resultPacket.results"
		}
	},
	autoLoad: true
});
