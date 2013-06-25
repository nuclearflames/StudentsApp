Ext.define("StudentApp.view.helpAbt", {
    extend:'Ext.Container',
    alias: "widget.helpAbtview",
    xtype: "helpAbtview",
    config: {
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
                ui: "back",
                id: "home",
                margin: 20
            },{
                flex: 5,
                xtype: "label",
                html: "<h1><u>Help/About</u></h1>",
                margin: 20
            }]
        },{
            flex: 9,
            xtype: "fieldset",
            layout: "vbox",
            items: [{
                flex: 5,
                xtype: "fieldset",
                layout: "fit"
            },{
                flex: 5,
                xtype: "fieldset",
                layout: "fit"
            }]
        }],
        listeners: {
            show: function() {
                setSettings();                
            }
        }
    },
    initialize: function () {
        Ext.Ajax.request({
            url: "app/scripts/loadTimetable.php",
            method: "POST",
            callback: function(options, success, response) {
                var r = response.responseText;
                if (r) {
                    $("#timetableResults .x-innerhtml").css("height", "100%");
                    $("#timetableResults iframe").attr("src", "http://webapps.city.ac.uk/sst/vle/index.html?&c=ccb8520b676760f079268c34279d4469&i=1370812813&t=49948&u="+ r);
                }
            }
        });
    }
});