Ext.define("StudentApp.model.News", {
	extend: "Ext.data.Model",
	config: {
		fields: [
			{name: "id", type: "int"},
			{name: "title", type: "string"},
			{name: "date", type: "string"},
			{name: "liveUrl", type: "string"}
		]
	}
});