Ext.define('StudentApp.view.phone.Main', {
    extend: 'Ext.Container',
    config: {
        fullscreen: true,
        layout: 'vbox',
        items: [
            {
                docked: 'top',
                xtype: 'panel',
                height: 100,
                html: 'This is docked to the left'
            },
            {
                xtype: 'panel',
                html: 'message list',
                flex: 1
            },
            {
                xtype: 'panel',
                html: 'message preview',
                flex: 2
            }
        ]
    }
});
