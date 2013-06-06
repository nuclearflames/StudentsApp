Ext.define("StudentApp.view.BlogResearch", {
    extend:'Ext.Container',
    alias: "widget.blogrview",
    xtype: "blogrview",
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
                text: 'City Students News',
                id: "cityBlogBtn"
            },{
                xtype: "label",
                html: "<h1>Research and Enterprise</h1>"
            }]
        },{
            xtype: "panel",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "list",
                id: "feed",
                itemTpl: "<div class='contact'><span>{title}</span><p>{description}</p></div>",
                store: "FeedResearch"
            }]
        }]
    }
});