//Initilize the data for the store
//Get the data by ajax to script
Ext.define("StudentApp.store.Labstats", {
	extend: "Ext.data.Store",
	config: {
		model: "StudentApp.model.Labstats",
		proxy: {
			type: "ajax",
			url: "app/scripts/labstats.php?",
			reader: {
				type: "json"
			}
		},
		autoLoad: true
	}
});