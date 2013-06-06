Ext.define("StudentApp.view.Edit", {
    extend:'Ext.Container',
    alias: "widget.editview",
    xtype: "editview",
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
                xtype: "label",
                html: "<h1>Edit your Account</h1>"
            }]
        },{
            xtype: "panel",
            flex: 9,
            layout: "fit",
            items: [{
                xtype: "label",
                html: "<h2>Set Layout:</h2>"
            },{
                xtype: "list",
                id: "editLayout",
                itemTpl: "<div class='edit'><span>{stylesheet}</span></div>",
                store: "Edit",
                listeners : {
                    itemtap: function (list, index, item, record) {
                        var recordVal = record.data.stylesheet.toLowerCase();
                        if (recordVal === "default") {
                            recordVal = "app";
                        }
                        $("link[href*='resources/css/']").attr("href", "resources/css/"+recordVal+".css");
                        Ext.Ajax.request({
                            url: "app/scripts/switch_styles.php?" + recordVal,
                            callback: function(options, success, response) {
                                console.log(response.responseText);
                            }
                        });
                    }
                }
            }]
        }]
    },
    initialize: function() {
    }
});