Ext.define("StudentApp.view.Blog", {
	extend:'Ext.Container',
	alias: "widget.blogview",
	xtype: "blogview",
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
				text: 'Personal Blog',
				id: "personalBlogBtn"
            }]
        }]
	}
});