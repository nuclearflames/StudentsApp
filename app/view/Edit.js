Ext.define("StudentApp.view.Edit", {
    extend:'Ext.Container',
    alias: "widget.editview",
    xtype: "editview",
    config: {
        layout: 'vbox',
        fullscreen: true,
        items: [{
            flex: 1,
            xtype: "panel",
            layout: 'vbox',
            items: [{
                flex: 0.5,
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home"
            },{
                flex: 0.5,
                xtype: "label",
                html: "<h1>Edit your Account</h1>"
            }]
        },{
            xtype: "panel",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "fieldset",
                layout: "vbox",
                items: [{
                    flex: 3,
                    xtype: "panel",
                    layout: "vbox",
                    items: [{
                        flex: 3,
                        xtype: "panel",
                        layout: "vbox",
                        items:[{
                            flex: 1,
                            xtype: "label",
                            html: "<h3>Change Layout Scheme:</h3>"
                        },{
                            flex: 5,
                            xtype: "list",
                            id: "editLayout",
                            itemTpl: "<div class='edit'><span>{stylesheet}</span></div>",
                            store: "Edit",
                            listeners : {
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
                        flex: 3,
                        xtype: "panel",
                        layout: "vbox",
                        items: [{
                            flex: 1,
                            xtype: "label",
                            html: "<h3>Change Font Size:</h3>"
                        },{
                            flex: 5,
                            xtype: "list",
                            id: "editFont",
                            itemTpl: "<div class='edit'><span>{font}</span></div>",
                            store: "EditFont",
                            listeners : {
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
                    }]
                },{
                    flex: 3,
                    xtype: "panel",
                    layout: "vbox",
                    items: [{
                        flex: 3,
                        xtype: "panel",
                        layout: "vbox",
                        items:[{
                            flex: 1,
                            xtype: "label",
                            html: "<h3>Change Background Colour:</h3>"
                        },{
                            flex: 5,
                            xtype: "list",
                            id: "editColour",
                            itemTpl: "<div class='edit'><span>{colour}</span></div>",
                            store: "EditColour",
                            listeners : {
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
                    }]
                }]
            }]
        }]
    },
    initialize: function() {
    }
});