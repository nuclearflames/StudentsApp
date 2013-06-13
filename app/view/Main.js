Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        fullscreen: true,
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: "panel",
                items: [{
                    xtype: "label",
                    html: "<span>Welcome to the webapp, please, click around...</span>"
                },{
                    layout: "hbox",
                    items: [{
                        flex: 2.5,
                        xtype: "panel",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Edit your profile',
                            id: "editBtn",
                        }]
                    },{
                        xtype: "panel",
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
                    layout: "hbox",
                    items: [{
                        xtype: "panel",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'PC Availability',
                            id: "labstatsBtn"
                        }]
                    },{
                        xtype: "panel",
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
                    layout: "hbox",
                    items: [{
                        xtype: "panel",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City News',
                            id: "newsBtn"
                        }]
                    },{
                        xtype: "panel",
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
                    layout: "hbox",
                    items: [{
                        xtype: "panel",
                        flex: 2.5,
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Search',
                            id: "searchBtn",
                        }]
                    },{
                        xtype: "panel",
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