Ext.define("StudentApp.store.EditView", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.EditView",
	data: [
		{ startUp: "main" },
		{ startUp: "maps" },
		{ startUp: "labstats" },
		{ startUp: "timetable" },
		{ startUp: "search" },
		{ startUp: "news" },
		{ startUp: "events" },
		{ startUp: "blog" },
		{ startUp: "city" },
		{ startUp: "helpAbt" },
		{ startUp: "settings" }
	]
});