//Initialize the view
//Initialize the view
Ext.define("StudentApp.view.City", {
    extend:'Ext.Container',
    alias: "widget.cityview",
    xtype: "cityview",
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
                    html: '<h3><u>City University Information</u></h3>'
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
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><br /><span>{summary}</span><br /><a target='_blank' href='{liveUrl}'>Continue Reading</a></div>",
                    store: "City"
                }]
            }]
        }]
    }
});