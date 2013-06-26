//Initialise the data design model for the store
Ext.define("StudentApp.model.Labstats", {
	extend: "Ext.data.Model",
	config: {
		fields: [
			{name: "id", type: "int"},
			{name: "name", type: "string"},
			{name: "inUse", type: "int"},
			{name: "offline", type: "int"},
			{name: "available", type: "int"},
			{name: "last_updated", type: "date"},
			{name: "offCount", type: "int"},
			{name: "asset", type: "auto"}
		]
	}
});