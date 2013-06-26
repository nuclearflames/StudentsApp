//Initialize the view
Ext.define("StudentApp.view.Edit", {
    extend:'Ext.Container',
    alias: "widget.settingsview",
    xtype: "settingsview",
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
                ui: "back",
                id: "home",
                margin: 20
            },{
                flex: 5,
                xtype: "label",
                html: "<h1><u>Edit your Account</u></h1>",
                margin: 20
            }]
        },{
            xtype: "fieldset",
            flex: 8,
            layout: "fit",
            items: [{
                xtype: "carousel",
                layout: "card",
                id: "1",
                items: [{
                    xtype: "fieldset",
                    layout: "vbox",
                    id: "editLayout",
                    items:[{
                        flex: 1,
                        xtype: "label",
                        html: "<h3><u>Change Layout Scheme</u></h3>"
                    },{
                        flex: 5,
                        xtype: "list",
                        id: "editLayout",
                        itemTpl: "<div class='edit'><span>{stylesheet}</span></div>",
                        store: "Edit",
                        listeners : {
                            //On tap will set the database to the values and reflect the changes on the page
                            itemtap: function (list, index, item, record) {
                                var recordVal = record.data.stylesheet.toLowerCase();
                                if (recordVal === "default") {
                                    recordVal = "app";
                                }
                                $("link[href*='resources/css/']").attr("href", "resources/css/"+recordVal+".css");
                                Ext.Ajax.request({
                                    url: "app/scripts/switch_styles.php",
                                    params: {
                                        stylesheet: recordVal
                                    },
                                    callback: function(options, success, response) {
                                        console.log(response.responseText);
                                    }
                                });
                            }
                        }
                    }]
                },{
                    xtype: "fieldset",
                    layout: "vbox",
                    id: "editFont",
                    items: [{
                        flex: 1,
                        xtype: "label",
                        html: "<h3><u>Change Font Size:</u></h3>"
                    },{
                        flex: 5,
                        xtype: "list",
                        id: "editFont",
                        itemTpl: "<div class='edit'><span>{font}</span></div>",
                        store: "EditFont",
                        listeners : {
                            //On tap will set the database to the values and reflect the changes on the page
                            itemtap: function (list, index, item, record) {
                                var recordVal = record.data.font;
                                $("span").css("font-size", recordVal);
                                $("h3").css("font-size", recordVal);
                                Ext.Ajax.request({
                                    url: "app/scripts/switch_styles.php",
                                    params: {
                                        font: recordVal
                                    },
                                    callback: function(options, success, response) {
                                    }
                                });
                            }
                        }
                    }]
                },{
                    xtype: "fieldset",
                    layout: "vbox",
                    id: "editColour",
                    items:[{
                        flex: 1,
                        xtype: "label",
                        html: "<h3><u>Change Background Colour:</u></h3>"
                    },{
                        flex: 5,
                        xtype: "list",
                        id: "editColour",
                        itemTpl: "<div class='edit'><span>{colour}</span></div>",
                        store: "EditColour",
                        listeners : {
                            //On tap will set the database to the values and reflect the changes on the page
                            itemtap: function (list, index, item, record) {
                                var recordVal = record.data.colour.toLowerCase();
                                $(".x-layout-card-item").css("background", recordVal);
                                Ext.Ajax.request({
                                    url: "app/scripts/switch_styles.php",
                                    params: {
                                        color: recordVal
                                    },
                                    callback: function(options, success, response) {
                                    }
                                });
                            }
                        }
                    }]
                },{
                    xtype: "fieldset",
                    layout: "vbox",
                    id: "EditView",
                    items:[{
                        flex: 1,
                        xtype: "label",
                        html: "<h3><u>Change Startup Page:</u></h3>"
                    },{
                        flex: 5,
                        xtype: "list",
                        id: "EditView",
                        itemTpl: "<div class='edit'><span>{startUp}</span></div>",
                        store: "EditView",
                        listeners : {
                            //On tap will set the database to the values and reflect the changes on the page
                            itemtap: function (list, index, item, record) {
                                var recordVal = record.data.startUp.toLowerCase();
                                $(".x-layout-card-item").css("background", recordVal);
                                Ext.Ajax.request({
                                    url: "app/scripts/switch_styles.php",
                                    params: {
                                        startUp: recordVal
                                    }
                                });
                            }
                        }
                    }]
                }]
            }]
        }],
        //Event listener for the page
        listeners: {
            show: function() {
                setSettings();
            }
        }
    }
});