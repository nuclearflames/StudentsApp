//Initilize the data for the store
Ext.define("StudentApp.store.EditFont", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.EditFont",
	data: [
		{ font: "14" },
		{ font: "16" },
		{ font: "18" },
		{ font: "20" },
		{ font: "22" }
	]
});