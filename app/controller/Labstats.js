Ext.define("StudentApp.controller.Labstats", {
	extend: "Ext.app.Controller",
	init: function () {
		this.control({
			"":{
				afterrender: this.onGridAfterRender
			}
		});
	}
});