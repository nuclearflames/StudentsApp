Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        fullscreen: true,
        layout: {type: 'vbox'},
        items: [{
            docked: 'left',
            xtype: 'panel',
            width: 200,
            items:
                [{
                    xtype: "image",
                    src: 'http://s1.city.ac.uk/i/city-logo-1894.png',
                    height: "50px",
                    width: "auto"
                },{
                    xtype: "image",
                    src: 'Resources/icons/labstats.png',
                    height: "10%",
                    width: "auto"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'University Maps',
                    ui:"action",
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
                    text: 'Blog',
                    id: "blogBtn"
                }]
            },{
                xtype: 'panel',
                html: 'Title',
                flex: 1,
                items: [{
                    items: [{
                        xtype: "button",
                        iconCls: 'action',
                        iconMask: true,
                        text: 'Login',
                        id: "loginBtn",
                        align: "right"
                    },{
                        xtype: "button",
                        iconCls: 'action',
                        iconMask: true,
                        text: 'Search',
                        id: "searchBtn",
                        pack: "center"
                    }]
                }]
            },{
                xtype: 'panel',
                id: "content",
                flex: 7,
                items: [{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'action'
                }]
            }
        ]
    },
    initialize: function() {
        this.callParent();
    }
});