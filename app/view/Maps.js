Ext.define("StudentApp.view.Maps", {
	extend:'Ext.Container',
	alias: "widget.mapsview",
	xtype: "mapsview",
	config: {
		layout: 'fit',
		fullscreen: true,
		items: [{
			items: [{
				xtype: "button",
				text: 'Maps',
				ui: "back",
				id: "home"
            }]
        }]
	}
});