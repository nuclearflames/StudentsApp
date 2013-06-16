Ext.define("StudentApp.view.Blog", {
    extend:'Ext.Container',
    alias: "widget.blogview",
    xtype: "blogview",
    config: {
        layout: 'vbox',
        fullscreen: true,
        items: [{
            xtype: "fieldset",
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
                    html: '<u>Student News Blog</u>'
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