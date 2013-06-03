//This file is used for global jquery/javascript variables

var
gMap,
chart, currentChartType,
lab, categories = [], inUse = [], available = [], offCount = [], renderBox,
chartData = {},

getData = function (record, room, reload) {
    categories = [], inUse = [], available = [], offCount = [];
    jQuery.each(record, function(i, v) {
        lab = v.data.asset;
        available.push(v.data.available);
        inUse.push(v.data.inUse);
        offCount.push(v.data.offCount);
        categories.push("<span>" + lab.location.labstat.id + "</span>" + lab.name);
        renderBox = "<h2>" + lab.name + "</h2>";
    });

    chartData.lab = lab;
    chartData.inUse = inUse;
    chartData.available = available;
    chartData.categories = categories;
    chartData.offCount = offCount;
    chartData.currentChart = room;
    chartData.renderBox = renderBox;

    if(currentChartType != "column") {
        renderColumnChart(chartData);
    }
    if (reload) {
        chart.setTitle(null, { text: "Displaying: <b>" + chartData.currentChart + "</b>" });
        chart.xAxis[0].setCategories(chartData.categories, false);
        chart.series[0].setData(chartData.available, false);
        chart.series[1].setData(chartData.offCount, false);
        //Last item update re-renders
        chart.series[2].setData(chartData.inUse, true);
    }
    checkLabelClick();
},
renderColumnChart = function(data) {
    if (chart) {
        chart.destroy();
    }
    currentChartType = "column";
    chart = new Highcharts.Chart({
        chart: {
            defaultSeriesType: 'bar',
            renderTo: Ext.get("chart").dom
        },
        title: {
            text: 'Computer Room Availablity'
        },
        xAxis: {
            categories: data.categories,
            id: "pie"
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
            data: data.available
        }, {
            name: 'Off/Available',
            data: data.offCount
        }, {
            name: 'Busy',
            data: data.inUse
        }],
        subtitle: {
            text: "Displaying: <b>" + data.currentChart + "</b>",
            y : 40
        }
    });
},
renderPieChart = function(data) {
    if (chart) {
        chart.destroy();
    }
    currentChartType = "pie";
    chart = new Highcharts.Chart({
        chart: {
            renderTo: Ext.get("chart").dom
        },
        legend: {
            layout: 'vertical',
            x: 100,
            y: 70
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                dataLabels: {
                    formatter: function () {
                        return '<b>' + this.point.name + '</b>: ' + this.point.y;
                    }
                }
            }
        },
        series: [{
            type: 'pie',
            name: 'Computer availability',
            data: [
                ['Available', data.available],
                ['Busy', data.inUse],
                ['Offline', data.offline]
            ]
        }],
        title: {
            text: 'Computer availablity for ' + data.name
        },
        tooltip: {
            formatter: function () {
                return '<b>' + this.point.name + '</b>: ' + this.point.y;
            }
        }
    });

},
checkLabelClick = function() {
    $(".highcharts-axis-labels text").click(function() {
        var text = $(this);
            Ext.getStore("Labstats").each(function(record) {
            if(record.data.asset.location.labstat.id == text.find(">:first-child").text()) {
                renderPieChart(record.data);
            }
        });
    });
},

markers = [],
polygons = [],
json,
error;