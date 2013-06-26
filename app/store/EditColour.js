//Initilize the data for the store
Ext.define("StudentApp.store.EditColour", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.EditColour",
	data: [
		{ colour: "LightBlue" },
		{ colour: "LightGreen" },
		{ colour: "LightYellow" },
		{ colour: "LightCoral" },
		{ colour: "Black" },
		{ colour: "White" }
	]
});