Ext.define("StudentApp.controller.Labstats", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            "#labstatsCassBtn": {
                tap: "labstatsCassBtn"
            }
        }
    },
    labstatsCassBtn: function() {
        Ext.getStore("Labstats").load();
        available = [];
        Ext.getStore("Labstats").each(function(record) {
            available.push("1");
            inUse.push(record.data.inUse);
        });
        chart.redraw();
        console.log(chartData);
    }
});