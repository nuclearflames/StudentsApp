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
            }
        }
    },
    labstatsMainBtn: function() {
        Ext.getStore("Labstats").load(
            {
                params: "",
                callback: function(r) {
                    getData(r, "Main Campus Rooms", "reload");
                }
            }
        );
    },
    labstatsCassBtn: function() {
        Ext.getStore("Labstats").load(
            {
                params: "cass-rooms",
                callback: function(r) {
                    getData(r, "Cass School Rooms", "reload");
                }
            }
        );
    },
    labstatsLawBtn: function() {
        Ext.getStore("Labstats").load(
            {
                params: "law-rooms",
                callback: function(r) {
                    getData(r, "Lawbore Rooms", "reload");
                }
            }
        );
    },
    labstatsHealthBtn: function() {
        Ext.getStore("Labstats").load(
            {
                params: "health-rooms",
                callback: function(r) {
                    getData(r, "Health School Rooms", "reload");
                }
            }
        );
    }
});
