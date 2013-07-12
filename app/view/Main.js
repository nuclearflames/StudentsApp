Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    fullscreen: true,
    config: {
        layout: "fit",
        //This sets the design of the page onload
        items: [{
            xtype: "fieldset",
            layout: "fit",
            items: [{
                xtype: "panel",
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                items: [{
                    xtype: "container",
                    items: [{
                        xtype: "image",
                        src: 'http://s1.city.ac.uk/i/city-logo-1894.png',
                        height: "50px",
                        width: "auto",
                        align: "left"
                    },{
                        xtype: "container",
                        items: [{
                            xtype: "label",
                            html: "<span>Welcome to the University</span>"
                        }]
                    },{
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
                    },{
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
                    },{
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
                    },{
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
                    },{
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
    },
    initialize: function() {
        this.callParent();
    }
});