Ext.define("StudentApp.controller.Labstats", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            "#labstatsMainBtn": {
                tap: "labstatsMainBtn"
            },
            "#labstatsCassBtn": {
                tap: "labstatsCassBtn"
            },
            "#labstatsLawBtn": {
                tap: "labstatsLawBtn"
            },
            "#labstatsHealthBtn": {
                tap: "labstatsHealthBtn"
            },
            "#test": {
                tap: "test"
            }
        }
    },
    labstatsMainBtn: function() {
        available = [];
        Ext.getStore("Labstats").load(
            {
                params: "",
                callback: function(r) {
                    updateChart(r, "Main Campus Rooms");
                }
            }
        );
    },
    labstatsCassBtn: function() {
        available = [];
        Ext.getStore("Labstats").load(
            {
                params: "cass-rooms",
                callback: function(r) {
                    updateChart(r, "Cass School Rooms");
                }
            }
        );
    },
    labstatsLawBtn: function() {
        available = [];
        Ext.getStore("Labstats").load(
            {
                params: "law-rooms",
                callback: function(r) {
                    updateChart(r, "Lawbore Rooms");
                }
            }
        );
    },
    labstatsHealthBtn: function() {
        available = [];
        Ext.getStore("Labstats").load(
            {
                params: "health-rooms",
                callback: function(r) {
                    updateChart(r, "Health School Rooms");
                }
            }
        );
    },
    test: function() {
        console.log(Ext.getStore("Labstats"));
    }
});