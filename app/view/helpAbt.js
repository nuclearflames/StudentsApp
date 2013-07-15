//Initialize the view
Ext.define("StudentApp.view.helpAbt", {
    extend:'Ext.Container',
    alias: "widget.helpAbtview",
    xtype: "helpAbtview",
    config: {
        //This sets the design of the page onload
        layout: 'vbox',
        fullscreen: true,
        items: [{
            flex: 2,
            xtype: "fieldset",
            layout: {
                type: 'hbox',
                pack: "center",
                align: "center"
            },
            items: [{
                flex: 5,
                xtype: "button",
                text: 'Home',
                iconCls: "home",
                id: "home",
                margin: 20
            },{
                flex: 5,
                xtype: "label",
                html: "<h2><u>Help/About</u></h2>",
                margin: 20
            }]
        },{
            flex: 9,
            xtype: "fieldset",
            layout: "vbox",
            items: [{
                flex: 5,
                xtype: "fieldset",
                layout: "fit",
                scrollable: "vertical",
                html: "<div style='text-align:center'><h2><u>Webapp For Students</u></h2><p>This webapp was built by: James Grant</p><p> To use this app navigate to the different pages, to change your settings go to 'settings'</p></div>"
            },{
                flex: 5,
                xtype: "fieldset",
                layout: "fit",
                scrollable: "vertical",
                html: "<div style='text-align:center'><h2><u>About City</u></h2><p>City University London is a special place. With skill and dedication, we have been using education, research and enterprise to transform the lives of our students, our community and the world for over a hundred years.</p><h2>Academic excellence for business and the professions</h2><p>We are a leading international university and the only university in London to be both committed to academic excellence and focused on business and the professions.</p></div>"
            }]
        }]
    }
});