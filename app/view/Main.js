Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        items: [{
            xtype: 'fieldset',
            items: [{
                xtype: "panel",
                items: [{
                    xtype: "image",
                    src: 'http://s1.city.ac.uk/i/city-logo-1894.png',
                    height: "50px",
                    width: "auto",
                    align: "left"
                },{
                    xtype: "panel",
                    items: [{
                        xtype: "label",
                        html: "<span>Welcome to the University</span>"
                    }]
                },{
                    layout: "hbox",
                    items: [{
                        flex: 5,
                        type: "panel",
                        layout: "hbox",
                        items: [{
                            flex: 2.5,
                            xtype: "panel",
                            items: [{
                                xtype: "button",
                                iconCls: 'map',
                                iconMask: true,
                                text: 'Maps',
                                id: "mapBtn"
                            }]
                        },{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'pc',
                                iconMask: true,
                                text: 'PC Availability',
                                id: "labstatsBtn"
                            }]
                        }]
                    },{
                        flex: 5,
                        layout: "hbox",
                        items: [{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'timetable',
                                iconMask: true,
                                text: 'Timetable',
                                id: "timetableBtn",
                                handler: function () {
                                    Ext.Viewport.setActiveItem("timetableview");
                                }
                            }]
                        },{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'search',
                                iconMask: true,
                                text: 'Search',
                                id: "searchBtn"
                            }]
                        }]
                    }]
                },{
                    layout: "hbox",
                    items: [{
                        layout: "hbox",
                        flex: 5,
                        items: [{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'news',
                                iconMask: true,
                                text: 'News',
                                id: "newsBtn"
                            }]
                        },{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'events',
                                iconMask: true,
                                text: 'Events',
                                id: "eventsBtn"
                            }]
                        }]
                    },{
                        flex: 5,
                        layout: "hbox",
                        items: [{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'blogs',
                                iconMask: true,
                                text: 'Blogs',
                                id: "blogBtn"
                            }]
                        },{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'settings',
                                iconMask: true,
                                text: 'Settings',
                                id: "editBtn"
                            }]
                        }]
                    }]
                },{
                    layout: "hbox",
                    items: [{
                        layout: "hbox",
                        flex: 5,
                        items: [{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'city',
                                iconMask: true,
                                text: 'City Information',
                                id: "cityBtn"
                            }]
                        },{
                            xtype: "panel",
                            flex: 2.5,
                            items: [{
                                xtype: "button",
                                iconCls: 'information',
                                iconMask: true,
                                text: 'Help/About',
                                id: "helpAbtBtn"
                            }]
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
                    $(".x-container").css("background", jsonObj.layoutColor);
                    $("span").css("font-size", jsonObj.layoutFontSize);
                    $("h3").css("font-size", jsonObj.layoutFontSize);
                    $("p").css("font-size", jsonObj.layoutFontSize);
                    Ext.Viewport.setActiveItem(jsonObj.startUp + "view");
                }
            }
        });
    }
});