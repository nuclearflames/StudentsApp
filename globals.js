//This file is used for global jquery/javascript variables

var
gMap,
chart,
lab, categories = [], inUse = [], available = [], offCount = [],
chartData = {},

updateChart = function (record, room) {

	categories = [], inUse = [], available = [], offCount = [];
    jQuery.each(record, function(i, v) {
        lab = v.data.asset;
        available.push(v.data.available);
        inUse.push(v.data.inUse);
        offCount.push(v.data.offCount);
        categories.push('<a href="' + String(lab.asset ? lab.asset.url : '') + '">' + lab.name + '</a>');
    });

    chartData.lab = lab;
    chartData.inUse = inUse;
    chartData.available = available;
    chartData.categories = categories;
    chartData.offCount = offCount;
    chartData.currentChart = room;

    chart.setTitle(null, { text: "Displaying: <b>" + chartData.currentChart + "</b>" });
    chart.xAxis[0].setCategories(chartData.categories, false);
    chart.series[0].setData(chartData.available, false);
    chart.series[1].setData(chartData.offCount, false);
	//Last item update re-renders
    chart.series[2].setData(chartData.inUse, true);

},

markers = [],
polygons = [],
json,
error;