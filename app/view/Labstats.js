Ext.define("StudentApp.view.Labstats", {
	extend:'Ext.Container',
	alias: "widget.labstatsview",
	xtype: "labstatsview",
	config: {
        layout: {type: 'vbox'},
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
                xtype: "button",
                text: 'Cass Rooms',
                ui: "back",
                id: "labstatsCassBtn"
            },{
                xtype: "button",
                text: 'Law Rooms',
                ui: "back",
                id: "labstatsLawBtn"
            },{
                xtype: "button",
                text: 'Health Rooms',
                ui: "back",
                id: "labstatsHealthBtn"
            }]
        },{
            xtype: "panel",
            layout: "fit",
            flex: 9,
            items: [{
                xtype: "chart",
                flipXY: true,
                background: 'white',
                store: "Labstats",
                series: [{
                    type: "bar",
                    xField: ["name"],
                    yField: ["available", "offline", "inUse"],
                    showInLegend: true,
                    style: {
                        stroke: 'rgb(40,40,40)',
                        maxBarWidth: 30
                    },
                    subStyle: {
                        fill: ["green", "black", "red"]
                    }
                }],
                legend: {
                    position: 'right'
                },
                axes: [{
                    type: "numeric",
                    position: 'bottom',
                    minimum: 0
                },{
                    type: 'category',
                    position: 'left'
                }],
                interactions: [{
                    type: 'iteminfo',
                    // You can also attach listeners to an interaction.
                    listeners: {
                        show: function (me, item, panel) {
                            panel.setHtml("<b>Name:</b> " + item.record.data.name + "<br /><b>Availiable:</b> " + item.record.data.available + "<br /><b>InUse:</b> " + item.record.data.inUse + "<br /><b>Switched Off/Offline:</b> " + item.record.data.offline);
                        }
                    }
                }]
            }]
        }]
	},
	initialize: function() {
		this.callParent();
	}
});
