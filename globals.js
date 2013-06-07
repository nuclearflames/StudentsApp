//This file is used for global jquery/javascript variables

var
//Labstats Code
chart, currentChartType, lab, categories = [], inUse = [], available = [], offCount = [], renderBox, chartData = {}, infoWindow,
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

//Google Maps Code
gMap,
markers = [],
polygons = [],
json,
processContent = function(i, v) {
    //Parse all multiple spaces in string
    var
    string = v.polygon.replace(/\s{2,}/g, " "),
    polygonBuild = [],
    polygonsBuild = [],
    tmp = "", j;
    polygonBuild = string.split(" ");
    //loop through and format the latlng into google valid latlngs
    for(j = 0; j < polygonBuild.length; j += 2) {
        tmp += "new google.maps.LatLng("+polygonBuild[j]+","+ polygonBuild[j+1]+"),";
    }
    polygonsBuild.push(tmp);
    polygons.push("[" + polygonsBuild + "]");
},
processMarkers = function(i, v) {
    var
    latLngBuild = new google.maps.LatLng(parseFloat(v.geoLat), parseFloat(v.geoLong)),
    description = unescape(v.description.replace(/\+/g, " ")),
    marker = new google.maps.Marker({
        position: latLngBuild,
        animation: google.maps.Animation.DROP,
        title: v.title,
        icon: v.icon
    });
    markers.push(marker);
    if(v.category === "buildings") {
        marker.setMap(gMap);
    }
    google.maps.event.addListener(marker, "mousedown", function() {
        if(infoWindow) { infoWindow.close(); }
        infoWindow = new google.maps.InfoWindow({content: "<b>" + v.title + "</b><br />" + description, maxWidth: 300});
        infoWindow.open(gMap, marker);
    });
},
handleNoGeolocation = function(initialLocation) {
    gMap.setCenter(initialLocation);
},
error;