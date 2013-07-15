//Initialize the view
Ext.define("StudentApp.view.Blog", {
    extend:'Ext.Container',
    alias: "widget.blogview",
    xtype: "blogview",
    config: {
        //This sets the design of the page onload
        layout: 'vbox',
        fullscreen: true,
        items: [{
            xtype: "fieldset",
            items: [{
                xtype: "panel",
                layout: "hbox",
                items: [{
                    flex: 5,
                    margin: 10,
                    xtype: "button",
                    text: 'Home',
                    iconCls: "home",
                    id: "home"
                },{
                    margin: 10,
                    flex: 5,
                    xtype: "label",
                    html: '<h3><u>Student News Blog</u></h3>'
                }]
            },{
                items: [{
                    margin: 10,
                    xtype: "button",
                    text: 'Research and Enterprise Blog Feed',
                    id: "blogRBtn"
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
                    itemTpl: "<div class='contact'><span><u>{title}</u></span><p>{description}</p></div>",
                    store: "Feed"
                }]
            }]
        }]
    }
});