Ext.define("StudentApp.view.BlogResearch", {
    extend:'Ext.Container',
    alias: "widget.blogrview",
    xtype: "blogrview",
    config: {
        layout: 'vbox',
        fullscreen: true,
        items: [{
            xtype: "fieldset",
            flex: 1,
            items: [{
                xtype: "panel",
                layout: "hbox",
                items: [{
                    margin: 10,
                    flex: 5,
                    xtype: "button",
                    text: 'Home',
                    ui: "back",
                    id: "home"
                },{
                    margin: 10,
                    flex: 5,
                    xtype: "label",
                    html: '<u>Research and Enterprise News</u>'
                }]
            },{
                items: [{
                    margin: 10,
                    xtype: "button",
                    text: 'City Students News',
                    id: "cityBlogBtn"
                }]
            }]
        },{
            xtype: "fieldset",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "panel",
                layout: "vbox",
                items: [{
                    flex: 0.5,
                    xtype: "label",
                    html: "<h3>Research and Enterprise Blog Feed:</h3>"
                },{
                    flex: 9.5,
                    xtype: "list",
                    id: "feed",
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><p>{description}</p></div>",
                    store: "FeedResearch"
                }]
            }]
        }]
    }
});