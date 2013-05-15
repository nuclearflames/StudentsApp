Ext.define("StudentApp.view.Login", {
	extend: "Ext.Container",
	alias: "widget.loginview",
	config: {
        layout: 'fit',
        fullscreen: true,
        items: [{
            items: [{
                xtype: "button",
                text: 'Login',
                ui: "back",
                id: "home"
            }]
        }]
	},
	initialize: function () {
		this.callParent(arguments);
	}
});