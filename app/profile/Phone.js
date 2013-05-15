Ext.define('StudentApp.profile.Phone', {
    extend: 'Ext.app.Profile',
    fullscreen: true,
    tabBarPosition: 'bottom',

    config: {
        name: 'Phone',
        views: ['Main']
    },

    isActive: function() {
        return Ext.os.is("Phone");
    },

    launch: function() {
        Ext.Viewport.add(Ext.create('StudentApp.view.phone.Main'));
    }
});