//Initialize the view
Ext.define("StudentApp.view.Timetables", {
    extend:'Ext.Container',
    alias: "widget.timetableview",
    xtype: "timetableview",
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
                ui: "back",
                id: "home",
                margin: 20
            },{
                flex: 5,
                xtype: "label",
                html: "<h1><u>View your Timetable</u></h1>",
                margin: 20
            }]
        },{
            flex: 9,
            xtype: "fieldset",
            layout: "vbox",
            items: [{
                xtype: "fieldset",
                layout: "fit",
                items: [{
                    xtype: "fieldset",
                    layout: "fit",
                    title: "<h1><u>Enter your student account ID (e.g 'abcd123'):</u></h1>",
                    items: [{
                        xtype: "searchfield",
                        id: "editSearch"
                    }]
                }]
            },{
                flex: 7,
                xtype: "fieldset",
                layout: "fit",
                items: [{
                    layout: "fit",
                    xtype: "panel",
                    html: "<iframe width='100%' height='100%' src=''></iframe>",
                    id: "timetableResults"
                }]
            }]
        }],
        //Event listener for the page
        listeners: {
            show: function() {
                setSettings();
            }
        }
    },
    initialize: function () {
        //Load the timetable if the person has perviously entered data
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