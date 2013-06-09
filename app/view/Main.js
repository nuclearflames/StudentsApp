Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        fullscreen: true,
        items: [{
            xtype: 'panel',
            items: [{
                xtype: "fieldset",
                items: [{
                    xtype: "label",
                    html: "<span>Welcome to the webapp, please, click around...</span>"
                },{
                    xtype: "fieldset",
                    layout: "hbox",
                    items: [{
                        flex: 2.5,
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Edit your profile',
                            id: "editBtn",
                        }]
                    },{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'University Maps',
                            id: "mapBtn",
                        }]
                    }]
                },{
                    xtype: "fieldset",
                    layout: "hbox",
                    items: [{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Labstats',
                            id: "labstatsBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City Blogs',
                            id: "blogBtn"
                        }]
                    }]
                },{
                    xtype: "fieldset",
                    layout: "hbox",
                    items: [{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City News',
                            id: "newsBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City Events',
                            id: "eventsBtn"
                        }]
                    }]
                },{
                    xtype: "fieldset",
                    layout: "hbox",
                    items: [{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Search',
                            id: "searchBtn",
                        }]
                    },{
                        xtype: "fieldset",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Personal Timetable',
                            id: "timetableBtn",
                            handler: function () {
                                Ext.Viewport.setActiveItem("timetableview");
                            }
                        }]
                    }]
                }]
            }]
        }]
    },
    initialize: function() {
        this.callParent();
        Ext.Ajax.request({
            url: "app/scripts/login_success.php",
            callback: function(options, success, response) {
                var jsonObj = JSON.parse(response.responseText);
                if (jsonObj.userID !== null) {
                    $("link[href*='resources/css/']").attr("href", "resources/css/" + jsonObj.layoutName + ".css");
                    $(".x-layout-card-item").css("background", jsonObj.layoutColor);
                    $("span").css("font-size", jsonObj.layoutFontSize);
                    $("h3").css("font-size", jsonObj.layoutFontSize);
                }
            }
        });
    }
});