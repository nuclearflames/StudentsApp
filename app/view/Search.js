Ext.define("StudentApp.view.Search", {
	extend:'Ext.Container',
	alias: "widget.searchview",
	xtype: "searchview",
	config: {
		layout: 'fit',
		fullscreen: true,
		items: [{
			items: [{
				xtype: "button",
				text: 'Search',
				ui: "back",
				id: "home"
            }]
        }]
	}
});