//Initialise the data design model for the store
Ext.define("StudentApp.model.Feed", {
	extend: "Ext.data.Model",
	config: {
		fields: [
			{name: "hyperlink", type: "string"},
			{name: "title", type: "string"},
			{name: "description", type: "string"}
		]
	}
});