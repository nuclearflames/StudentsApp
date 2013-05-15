Ext.define("StudentApp.view.personalBlog", {
	extend:'Ext.Container',
	alias: "widget.personalblogview",
	xtype: "personalblogview",
	config: {
		layout: 'fit',
		fullscreen: true,
		items: [{
			items: [{
				xtype: "button",
				text: 'Home',
				ui: "back",
				id: "home"
			},{
				xtype: "button",
				text: 'Blog Home',
				ui: "back",
				id: "blogHome"
            }]
        }]
	}
});