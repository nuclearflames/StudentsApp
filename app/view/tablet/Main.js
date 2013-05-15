Ext.define('StudentApp.view.tablet.Main', {
    extend: 'Ext.Container',
    config: {
        fullscreen: true,
        layout: 'hbox',
        items: [
            {
                docked: 'top',
                xtype: 'panel',
                height: 100,
                html: 'This is docked to the top'
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
