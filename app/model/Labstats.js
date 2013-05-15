Ext.define("StudentApp.model.Labstats", {
	extend: "Ext.data.Model",
	fields: [
		{name: "id", type: "int"},
		{name: "id", type: "string"},
		{name: "inUse", type: "int"},
		{name: "offline", type: "int"},
		{name: "availiable", type: "int"},
		{name: "last_updated", type: "date"},
		{name: "offCount", type: "int"},
		{name: "asset", type: "string"}
	]
});