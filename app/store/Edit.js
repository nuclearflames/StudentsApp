//Initilize the data for the store
Ext.define("StudentApp.store.Edit", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.Edit",
	data: [
		{ stylesheet: "Default" },
		{ stylesheet: "Blackberry" },
		{ stylesheet: "Windows" }
	]
});