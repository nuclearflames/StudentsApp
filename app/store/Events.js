//Initilize the data for the store
//Get the data by ajax to script
Ext.define("StudentApp.store.Events", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.Events",
	proxy: {
		type: "ajax",
		url: "app/scripts/events.php?",
		reader: {
			type: "json",
			rootProperty: "response.resultPacket.results"
		}
	},
	autoLoad: true
});
