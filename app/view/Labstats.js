Ext.define("StudentApp.view.Labstats", {
    extend:'Ext.Container',
    alias: "widget.labstatsview",
    xtype: "labstatsview",
    config: {
        layout: {type: 'hbox'},
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
        var
        createChart = Ext.create("Ext.util.DelayedTask", function() {

            Ext.getStore("Labstats").each(function(record) {
                lab = record.data.asset;
                available.push(record.data.available);
                inUse.push(record.data.inUse);
                offCount.push(record.data.offCount);
                categories.push('<a href="' + String(lab.asset ? lab.asset.url : '') + '">' + lab.name + '</a>');
            });

            chartData.lab = lab;
            chartData.inUse = inUse;
            chartData.available = available;
            chartData.categories = categories;
            chartData.offCount = offCount;
            chartData.currentChart = "Main Campus Rooms";

            chart = new Highcharts.Chart({
                chart: {
                    defaultSeriesType: 'bar',
                    renderTo: Ext.get("chart").dom
                    //events : {
                    //    load: loopsiloop()
                    //}
                },
                title: {
                    text: 'Computer Room Availablity'
                },
                xAxis: {
                    categories: chartData.categories
                },
                yAxis: {
                    min: 0,
                    title: {
                        text: 'No. of Computers'
                    }
                },
                legend: {
                    align: 'right',
                    verticalAlign: 'middle',
                    layout: "vertical"
                },
                plotOptions: {
                    series: {
                        stacking: "normal"
                    }
                },
                series: [{
                    name: 'Available',
                    data: chartData.available
                }, {
                    name: 'Off/Available',
                    data: chartData.offCount
                }, {
                    name: 'Busy',
                    data: chartData.inUse
                }],
                subtitle: {
                    text: "Displaying: <b>" + chartData.currentChart + "</b>",
                    y : 40
                }
            });

        });

        if (Ext.getStore("Labstats").getCount() <= 0) {
            createChart.delay(4000);
        }
    }
});
