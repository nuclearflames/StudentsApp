//Initialise the controller
Ext.define("StudentApp.controller.Labstats", {
    extend: "Ext.app.Controller",
    config: {
        routes: {
            "labstats": "showView",
            "pcs": "showView"
        },
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
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
    showView: function(e) {
        Ext.Viewport.setActiveItem("labstatsview");
    },
    //Load University labs
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
    //Load Cass labs
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
    //Load Law labs
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
    //Load Health labs
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
