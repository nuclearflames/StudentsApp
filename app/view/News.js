Ext.define("StudentApp.view.News", {
    extend:'Ext.Container',
    alias: "widget.newsview",
    xtype: "newsview",
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
                    xtype: "button",
                    text: 'Home',
                    ui: "back",
                    id: "home"
                },{
                    margin: 10,
                    flex: 6,
                    xtype: "label",
                    html: '<u>City Universtiy News</u>'
                }]
            },{
                xtype: "fieldset",
                items: [{
                    xtype: "label",
                    html: "<h1>Search News:</h1>"
                },{
                    margin: 10,
                    xtype: "searchfield",
                    id: "newsSearch",
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
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><br /><a target='_blank' href='{liveUrl}'>Continue Reading</a></div>",
                    store: "News"
                }]
            }]
        }]
    },
    initialize: function() {
    }
});