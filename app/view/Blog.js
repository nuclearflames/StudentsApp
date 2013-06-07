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
            }]
        },{
            xtype: "panel",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "panel",
                layout: "vbox",
                items: [{
                    flex: 1,
                    xtype: "label",
                    html: "<h3>Student News</h3>"
                },{
                    flex: 9,
                    xtype: "list",
                    id: "feed",
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><p>{description}</p></div>",
                    store: "Feed"
                }]
            }]
        }]
    },
    initialize: function() {
    }
});