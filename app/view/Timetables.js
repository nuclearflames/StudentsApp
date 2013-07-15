//Initialize the view
Ext.define("StudentApp.view.Timetables", {
    extend:'Ext.Container',
    alias: "widget.timetableview",
    xtype: "timetableview",
    config: {
        //This sets the design of the page onload
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
                flex: 5,
                xtype: "button",
                text: 'Home',
                iconCls: "home",
                id: "home",
                margin: 20
            },{
                flex: 5,
                xtype: "label",
                html: "<h3><u>View your Timetable</u></h3>",
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
                    layout: "fit",
                    title: "<h3><u>Enter your student account ID (e.g 'abcd123'):</u></h3>",
                    items: [{
                        xtype: "searchfield",
                        id: "editSearch"
                    }]
                }]
            },{
                flex: 7,
                xtype: "fieldset",
                layout: "fit",
                items: [{
                    layout: "fit",
                    xtype: "panel",
                    html: "<iframe width='100%' height='100%' src=''></iframe>",
                    id: "timetableResults"
                }]
            }]
        }]
    }
});