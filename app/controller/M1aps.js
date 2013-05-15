Ext.define("StudentApp.controller.Maps", {
	extend: "Ext.app.Controller",
	onNewMap: function () {
		console.log("newMap");
	},
	launch: function () {
		this.callParent();
		console.log("launch");
	},
	init: function () {
		this.callParent();
		console.log("init");
	},
	activateMap: function() {
		Ext.Viewport.animateActiveItem(this.slideLeftTransition);
	}
});