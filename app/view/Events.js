Ext.define("StudentApp.view.Events", {
    extend:'Ext.Container',
    alias: "widget.newsview",
    xtype: "eventsview",
    config: {
        layout: 'vbox',
        fullscreen: true,
        items: [{
            xtype: "fieldset",
            layout: "vbox",
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
                    html: '<u>City Universtiy News</u>'
                }]
            },{
                items: [{
                    margin: 10,
                    xtype: "searchfield",
                    text: 'Research and Enterprise',
                    id: "randEBlogBtn"
                }]
            }]
        },{
            xtype: "fieldset",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "panel",
                layout: "fit",
                items: [{
                    flex: 9.5,
                    xtype: "list",
                    id: "feed",
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><br /><a href='{liveUrl}'>Continue Reading</a></div>",
                    store: "News"
                }]
            }]
        }]
    },
    initialize: function() {
    }
});