Ext.define("StudentApp.view.SearchPhone", {
    extend:'Ext.Container',
    alias: "widget.phoneview",
    xtype: "blogview",
    config: {
        layout: 'vbox',
        fullscreen: true,
        items: [{
            xtype: "fieldset",
            items: [{
                xtype: "panel",
                layout: "hbox",
                items: [{
                    margin: 10,
                    flex: 5,
                    xtype: "button",
                    text: 'Home',
                    ui: "back",
                    id: "home"
                },{
                    margin: 10,
                    flex: 5,
                    xtype: "label",
                    html: '<u>Search for Staff and Student Emails</u>'
                }]
            },{
                items: [{
                    margin: 10,
                    xtype: "button",
                    text: 'Search Email directory',
                    id: "searchEmailBtn"
                }]
            }]
        },{
            xtype: "fieldset",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "panel",
                layout: "fit",
                id: "formPhonePanel",
                items: [{
                    layout: "vbox",
                    xtype: "container",
                    items: [{
                        flex: 3,
                        items: [{
                            xtype: "label",
                            html: "<h3>Search Details</h3>",
                            margin: 5
                        },{
                            xtype: "textfield",
                            label: 'Search For',
                            name: "name1",
                            id: "name1"
                        },{
                            xtype: "textfield",
                            label: 'Refine With',
                            name: "name2",
                            id: "name2"
                        },{
                            xtype: "button",
                            id: "formPhonePanelBtn",
                            ui: "action",
                            text: "Submit",
                            margin: 10
                        }]
                    },{
                        flex: 7,
                        layout: "fit",
                        xtype: "container",
                        items: [{
                            xtype: "panel",
                            scrollable: 'vertical',
                            id: "phoneResponsePanel"
                        }]
                    }]
                }]
            }]
        }]
    }
});