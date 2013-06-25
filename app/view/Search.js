Ext.define("StudentApp.view.Search", {
    extend:'Ext.Container',
    alias: "widget.searchview",
    xtype: "searchview",
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
                    iconCls: "home",
                    ui: "back",
                    id: "home"
                },{
                    margin: 10,
                    flex: 5,
                    xtype: "label",
                    html: '<u>Search for Staff and Student Email details</u>'
                }]
            },{
                items: [{
                    margin: 10,
                    xtype: "button",
                    text: 'Search phone directory',
                    id: "searchPhoneBtn"
                }]
            }]
        },{
            xtype: "fieldset",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "panel",
                layout: "fit",
                id: "formPanel",
                items: [{
                    layout: "vbox",
                    xtype: "container",
                    items: [{
                        items: [{
                            xtype: "label",
                            html: "<h3>Search Details</h3>",
                            margin: 5
                        },{
                            xtype: "textfield",
                            label: 'Family Name',
                            name: "family",
                            id: "familyField"
                        },{
                            xtype: "textfield",
                            label: 'Given Name',
                            name: "given",
                            id: "givenField"
                        },{
                            xtype: "label",
                            html: "<h3>Category</h3>",
                            margin: 5
                        },{
                            xtype: 'radiofield',
                            name : 'category',
                            value: 'all',
                            label: 'all',
                            checked: true,
                            id: "formCategory"
                        },{
                            xtype: 'radiofield',
                            name : 'category',
                            value: 'student',
                            label: 'Student'
                        },{
                            xtype: 'radiofield',
                            name : 'category',
                            value: 'staff',
                            label: 'Staff'
                        },{
                            xtype: "button",
                            id: "formPanelBtn",
                            ui: "action",
                            text: "Submit",
                            margin: 10
                        }]
                    },{
                        flex:6,
                        layout: "fit",
                        xtype: "container",
                        items: [{
                            xtype: "panel",
                            scrollable: 'vertical',
                            id: "emailResponsePanel"
                        }]
                    }]
                }]
            }]
        }],
        listeners: {
            show: function() {
                setSettings();                
            }
        }
    }
});