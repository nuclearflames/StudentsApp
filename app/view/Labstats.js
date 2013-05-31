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
                id: "chart"
            }]
        }]
    },
    initialize: function() {
        this.callParent();
        //Delay until store has retrieved data
        var chart = new Highcharts.Chart({
            chart: {
                renderTo: Ext.get("chart"),
                defaultSeriesType: 'bar',
                height: 600
                //events : {
                //  load: loopsiloop()
                //}
            },
            exporting: {
                enabled: false
            },
            legend: {
                align: 'right'
            },
            series: [{
                name: 'Available',
                data: Ext.getStore("Labstats").getCount()
            }, {
                name: 'Busy',
                data: Ext.getStore("Labstats").getCount()
            }],
        //    subtitle: {
       //         text: 'Updated at <b>' + chartData.date[4] + ':' + chartData.date[5] +  '</b> today ',
       //         y : 40
        //    },
            title: {
                text: 'Computer Room Availablity'
            },
            tooltip: {
                formatter: function () {

                    return '<b>' + this.x + '</b><br/>' +
                        this.series.name + ': ' + this.y + '<br/>' +
                        'Total: ' + this.point.stackTotal;
                }
            },
        //    xAxis: {
        //        categories: chartData.categories
         //   },
            yAxis: {
                min: 0,
                title: {
                    text: 'No. of Computers'
                }
            }
        });
        while(Ext.getStore("Labstats").getCount() <= 0) {
            chart.delay(500);
        }
        console.log(Ext.getStore("Labstats").getCount());
            if ($lab.length) {

                chartType = 'pie';
                ajaxData = "id=" + $lab.attr('id').replace('lab-', '');
                // CITY.load('highcharts', getPieData);

            }

            // is there the big all lab chart $labs
            else if ($labs.length) {

                chartType = 'column';

                // check if we are on the page displaying the cass rooms
                if (/cass-rooms/.test(w.location.pathname)) {
                    ajaxData = "cass-rooms";
                }

                // check if we are on the page displaying the law rooms
                else if (/law-rooms/.test(w.location.pathname)) {
                    ajaxData = "law-rooms";
                }

                // check if we are on the page displaying the health rooms
                else if (/health-rooms/.test(w.location.pathname)) {
                    ajaxData = "health-rooms";
                }


            }

            CITY.load('highcharts', getData);
    }
});
