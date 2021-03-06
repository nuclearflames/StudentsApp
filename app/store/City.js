//Initilize the data for the store
//Get the data by ajax to script
Ext.define("StudentApp.store.City", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.City",
	proxy: {
		type: "ajax",
		url: "app/scripts/city.php?",
		reader: {
			type: "json",
			rootProperty: "response.resultPacket.results"
		}
	},
	autoLoad: true
});
