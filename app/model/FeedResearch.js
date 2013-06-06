Ext.define("StudentApp.model.FeedResearch", {
	extend: "Ext.data.Model",
	config: {
		fields: [
			{name: "hyperlink", type: "string"},
			{name: "title", type: "string"},
			{name: "description", type: "string"}
		]
	}
});