Ext.define("StudentApp.view.Labstats", {
    extend:'Ext.Container',
    alias: "widget.labstatsview",
    xtype: "labstatsview",
    config: {
        layout: {type: 'hbox'},
        fullscreen: true,
        items: [{
            xtype: "panel",
            width: 150,
            items: [{
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home"
            },{
                xtype: "button",
                text: 'Main Rooms',
                id: "labstatsMainBtn"
            },{
                xtype: "button",
                text: 'Cass Rooms',
                id: "labstatsCassBtn"
            },{
                xtype: "button",
                text: 'Law Rooms',
                id: "labstatsLawBtn"
            },{
                xtype: "button",
                text: 'Health Rooms',
                id: "labstatsHealthBtn"
            },{
                xtype: "button",
                text: 'Test Rooms',
                id: "test"
            }]
        },{
            xtype: "panel",
            layout: "fit",
            flex: 9,
            items: [{
                id: "chart"
            }]
        }]
    },
    initialize: function() {
        this.callParent();
        //Delay until store has retrieved data

        Ext.getStore("Labstats").load(
            {
                params: "",
                callback: function(r) {
                    getData(r, "Main Campus Rooms");
                }
            }
        );
    }
});
