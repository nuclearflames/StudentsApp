Ext.define('StudentApp.profile.Tablet', {
    extend: 'Ext.app.Profile',
    fullscreen: true,
    tabBarPosition: 'bottom',

    config: {
        name: 'Tablet',
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is("Tablet");
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('StudentApp.view.tablet.Main'));
    }
});