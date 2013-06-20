Ext.define("StudentApp.model.Maps", {
	extend: "Ext.data.Model",
	config: {
		fields: [
			{name: "asset_id", type: "int"},
			{name: "title", type: "string"},
			{name: "link", type: "string"},
			{name: "description", type: "string"},
			{name: "category", type: "auto"}
		]
	}
});