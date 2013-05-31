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
                id: "chart"
            }]
        }]
    },
    initialize: function() {
        this.callParent();
        //Delay until store has retrieved data
        var
        createChart = Ext.create("Ext.util.DelayedTask", function() {

        console.log(Ext.getStore("Labstats").getCount());

            Ext.getStore("Labstats").each(function(record) {
                lab = record.data.asset;
                console.log(record.data.asset);
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
            chartData.currentChart = "Campus Rooms";

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
                    align: 'right'
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
                    name: 'Off',
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
