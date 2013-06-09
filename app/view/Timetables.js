Ext.define("StudentApp.view.Timetables", {
	extend:'Ext.Container',
	alias: "widget.timetableview",
	xtype: "timetableview",
	config: {
		layout: 'vbox',
		fullscreen: true,
		items: [{
			flex: 2,
            xtype: "fieldset",
            layout: {
                type: 'hbox',
                pack: "center",
                align: "center"
            },
            items: [{
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home",
                margin: 20
            },{
                flex: 6,
                xtype: "label",
                html: "<h1><u>View your Timetable</u></h1>",
                margin: 20
            }]
        },{
        	flex: 9,
            xtype: "fieldset",
            layout: "vbox",
            items: [{
                xtype: "fieldset",
                layout: "fit",
                items: [{
                    xtype: "fieldset",
                    flex: 5,
                    title: "<h1><u>Enter your student account ID (e.g 'abcd123'):</u></h1>",
                    items: [{
        				xtype: "searchfield",
                        label: "search",
                        id: "editSearch"
                    }]
                }]
            }]
        }]
	}
});