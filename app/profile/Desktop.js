Ext.define('StudentApp.profile.Desktop', {
    extend: 'Ext.app.Profile',
    fullscreen: true,
    tabBarPosition: 'bottom',

    config: {
        name: 'Desktop',
        controllers: ["Main"],
        views: ['Main', "Maps"]
    },

    isActive: function() {
        return Ext.os.is("Desktop");
    },

    launch: function() {
       // var studentAppContainer = Ext.create('StudentApp.view.desktop.Main'); "StudentApp.controller.Maps", 
        var pages = [
            { xtype: "mainpageview" },
            { xtype: "mapspageview" }
        ];
        Ext.Viewport.add(pages);
    }
});