Ext.define("StudentApp.store.EditColour", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.EditColour",
	data: [
		{ colour: "LightBlue" },
		{ colour: "LightGreen" },
		{ colour: "lightYellow" },
		{ colour: "White" }
	]
});