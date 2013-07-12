//Initialize the view
Ext.define("StudentApp.view.SearchPhone", {
    extend:'Ext.Container',
    alias: "widget.phoneview",
    xtype: "phoneview",
    config: {
        //This sets the design of the page onload
        layout: 'vbox',
        fullscreen: true,
        items: [{
            height: "100px",
            xtype: "fieldset",
            cls: "expandMenu",
            items: [{
                xtype: "panel",
                layout: "hbox",
                items: [{
                    margin: 10,
                    flex: 3,
                    xtype: "button",
                    text: 'Home',
                    iconCls: "home",
                    id: "home"
                },{
                    margin: 10,
                    flex: 3,
                    xtype: "label",
                    html: '<u>Phone Records</u>'
                },{
                    docked: "right",
                    width: "30%",
                    items: [{
                        xtype: "button",
                        text: 'Menu',
                        iconCls: "menu",
                        id: "menu",
                        action: "menuExpand",
                        margin: 20
                    }]
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
                            scrollable: {
                                direction: 'both',
                                directionLock: true
                            },
                            id: "phoneResponsePanel"
                        }]
                    }]
                }]
            }]
        }]
    }
});