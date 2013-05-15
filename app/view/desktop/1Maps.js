Ext.define("StudentApp.view.desktop.Maps", {
	extend: "Ext.form.Panel",
	alias: "widget.mapspageview",
	config: {
		scrollable: "vertical",
        fullscreen: true,
        layout: { type: 'vbox'},
        items: [
            {
                docked: 'left',
                xtype: 'panel',
                width: 200,
                items: [
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
                        text: 'dsaddddddd',
                        ui:"action",
                        itemId: "new-map-btn"
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
        listeners: {
            delegate: '#logOffButton',
            event: 'tap',
            fn: 'onLogOffButtonTap'
        }
	},
	initialize: function () {
		this.callParent(arguments);
	}
});