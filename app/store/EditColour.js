Ext.define("StudentApp.store.EditColour", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.EditColour",
	data: [
		{ colour: "Blue" },
		{ colour: "Green" },
		{ colour: "Red" },
		{ colour: "Orange" },
		{ colour: "Yellow" },
		{ colour: "White" }
	]
});