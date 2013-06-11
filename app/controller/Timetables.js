Ext.define("StudentApp.controller.Timetables", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            "#editSearch": {
                keyup: "editSearchAction"
            }
        }
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
    editSearchAction: function() {
        var val = Ext.ComponentMgr.get("editSearch").getValue();
        Ext.Ajax.request({
            url: "https://webapps.city.ac.uk/sst/vle/index.html?&c=ccb8520b676760f079268c34279d4469&i=1370812813&t=49948&u:"+ val,
            disableCaching: false,
            callback: function(options, success, response) {
                console.log(response.responseText);
            }
        });
    }
});