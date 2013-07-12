//Initialize the view
Ext.define("StudentApp.view.News", {
    extend:'Ext.Container',
    alias: "widget.newsview",
    xtype: "newsview",
    config: {
        //This sets the design of the page onload
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
                    iconCls: "home",
                    ui: "back",
                    id: "home"
                },{
                    margin: 10,
                    flex: 5,
                    xtype: "label",
                    html: '<u>City University News</u>'
                }]
            },{
                xtype: "panel",
                items: [{
                    label: "Search News:",
                    margin: 10,
                    xtype: "searchfield",
                    id: "newsSearch"
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
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><br /><span>{metaData.c}</span><br /><a target='_blank' href='{liveUrl}'>Continue Reading</a></div>",
                    store: "News"
                }]
            }]
        }]
    }
});