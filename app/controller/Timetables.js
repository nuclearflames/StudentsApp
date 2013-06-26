//Initialise the controller
Ext.define("StudentApp.controller.Timetables", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
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
    //Load the timetable based on the value in search
    editSearchAction: function() {
        var val = Ext.ComponentMgr.get("editSearch").getValue();
        $("#timetableResults .x-innerhtml").css("height", "100%") ;
        $("#timetableResults iframe").attr("src", "http://webapps.city.ac.uk/sst/vle/index.html?&c=ccb8520b676760f079268c34279d4469&i=1370812813&t=49948&u="+ val);

        Ext.Ajax.request({
            url: "app/scripts/timetable.php",
            method: "POST",
            params: {"userNo":val}
        });
    }
});