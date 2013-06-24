Ext.define("StudentApp.view.Labstats", {
    extend:'Ext.Container',
    alias: "widget.labstatsview",
    xtype: "labstatsview",
    config: {
        layout: {type: 'vbox'},
        fullscreen: true,
        items: [{
            xtype: "fieldset",
            items: [{
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "button",
                    text: 'Home',
                    ui: "back",
                    iconCls: "home",
                    id: "home",
                    margin: 10,
                    flex: 5
                },{
                    xtype: "label",
                    html: "<u>Computer Availability Stats</u>",
                    margin: 10,
                    flex: 5
                }]
            },{
                items: [{
                    layout: "hbox",
                    items: [{
                        flex: 5,
                        xtype: "button",
                        text: "University PC's",
                        id: "labstatsMainBtn",
                        margin: 5
                    },{
                        flex: 5,
                        xtype: "button",
                        text: "Cass PC's",
                        id: "labstatsCassBtn",
                        margin: 5
                    }]
                },{
                    layout: "hbox",
                    items: [{
                        flex: 5,
                        xtype: "button",
                        text: "Law PC's",
                        id: "labstatsLawBtn",
                        margin: 5
                    },{
                        flex: 5,
                        xtype: "button",
                        text: "Health PC's",
                        id: "labstatsHealthBtn",
                        margin: 5
                    }]
                }]
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
