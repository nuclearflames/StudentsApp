Ext.define('StudentApp.view.desktop.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainpageview",
    config: {
        fullscreen: true,
        layout: { type: 'vbox'},
        items: [
            {
            docked: 'left',
            xtype: 'panel',
            width: 200,
            items:
                [
                    {
                        xtype: 'container',
                        html: 'Pack:'
                    },{
                        xtype: "image",
                        src: 'Resources/icons/labstats.png',
                        height: "10%",
                        width: "auto"
                    },{
                        xtype: "button",
                        iconCls: 'action',
                        iconMask: true,
                        text: 'Maasdsps',
                        ui:"action",
                        itemId: "newMapBtn"
                    },{
                        xtype: "button",
                        iconCls: 'action',
                        iconMask: true,
                        text: 'action'
                    },{
                        xtype: "button",
                        iconCls: 'action',
                        iconMask: true,
                        text: 'action'
                    }
                ]
            },
            {
                xtype: 'panel',
                html: 'Title',
                flex: 1
            },
            {
                xtype: 'panel',
                html: 'message preview',
                flex: 7
            }
        ],
        listeners: [{
            delegate: '#newMapBtn',
            event: 'tap',
            fn: 'onMapsPagePress'
        }]
    },
    initialize: function() {
        this.callParent();
    },
    onMapsPagePress: function() {
        this.fireEvent("mapsPageCommand");
        console.log(this);
    }
});