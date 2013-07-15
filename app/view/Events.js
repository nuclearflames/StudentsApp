//Initialize the view
Ext.define("StudentApp.view.Events", {
    extend:'Ext.Container',
    alias: "widget.eventsview",
    xtype: "eventsview",
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
                    id: "home"
                },{
                    margin: 10,
                    flex: 5,
                    xtype: "label",
                    html: '<h3><u>City University Events</u></h3>'
                }]
            },{
                xtype: "panel",
                items: [{
                    margin: 10,
                    label: "Search Events:",
                    xtype: "searchfield",
                    id: "eventsSearch"
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
                    id: "feedEvents",
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><br /><span>{metaData.c}</span><br /><a href='{liveUrl}' target='_blank'>Continue Reading</a></div>",
                    store: "Events"
                }]
            }]
        }]
    }
});