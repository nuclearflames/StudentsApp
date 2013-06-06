Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        fullscreen: true,
        layout: "vbox",
        items: [{
            xtype: 'panel',
            flex: 7,
            items:
                [{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'Edit your profile',
                    id: "editBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'University Maps',
                    id: "mapBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'Labstats',
                    id: "labstatsBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'City Blogs',
                    id: "blogBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'City News',
                    id: "newsBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'City Events',
                    id: "eventsBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'Search',
                    id: "searchBtn",
                    pack: "center"
                }]
            },{
                xtype: "panel"
            }
        ]
    },
    initialize: function() {
        this.callParent();
    }
});