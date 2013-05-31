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
        console.log(Ext.getStore("Labstats").getCount());
    },
    init: function () {
        this.control({
            "":{
                afterrender: this.onGridAfterRender
            }
        });
    }
});