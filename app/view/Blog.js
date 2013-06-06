Ext.define("StudentApp.view.Blog", {
    extend:'Ext.Container',
    alias: "widget.blogview",
    xtype: "blogview",
    config: {
        layout: 'vbox',
        fullscreen: true,
        items: [{
            xtype: "panel",
            flex: 1,
            items: [{
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home"
            },{
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home"
                },{
                xtype: "button",
                text: 'Research and Enterprise',
                id: "randEBlogBtn"
            },{
                xtype: "label",
                html: "<h1>Student News</h1>"
            }]
        },{
            xtype: "panel",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "list",
                id: "feed",
                itemTpl: "<div class='contact'><span>{title}</span><p>{description}</p></div>",
                store: "Feed"
            }]
        }]
    },
    initialize: function() {
    }
});