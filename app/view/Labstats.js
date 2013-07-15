//Initialize the view
Ext.define("StudentApp.view.Labstats", {
    extend:'Ext.Container',
    alias: "widget.labstatsview",
    xtype: "labstatsview",
    config: {
        //This sets the design of the page onload
        layout: {type: 'vbox'},
        fullscreen: true,
        items: [{
            height: "100px",
            xtype: "fieldset",
            cls: "expandMenu",
            items: [{
                xtype: "panel",
                layout: "hbox",
                items: [{
                    xtype: "button",
                    text: 'Home',
                    iconCls: "home",
                    id: "home",
                    margin: 10,
                    flex: 3
                },{
                    xtype: "label",
                    html: "<h3><u>Computer Availability Stats</u></h3>",
                    margin: 10,
                    flex: 7
                },{
                    docked: "right",
                    width: "30%",
                    items: [{
                        xtype: "button",
                        text: 'Menu',
                        iconCls: "menu",
                        id: "menu",
                        action: "menuExpand",
                        margin: 20
                    }]
                }]
            },{
                xtype: "panel",
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
                },{
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
        },{
            xtype: "fieldset",
            layout: "fit",
            flex: 9,
            items: [{
                scrollable: {
                    direction: 'vertical',
                    directionLock: true
                },
                id: "chart"
            }]
        }]
    },
    initialize: function() {
        //Initialize the labstats highcharts
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
