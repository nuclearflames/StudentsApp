//Initialise the controller
Ext.define("StudentApp.controller.SearchPhone", {
    extend: "Ext.app.Controller",
    config: {
        routes: {
            "searchphone": "showView"
        },
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
            "#formPhonePanelBtn": {
                tap: "formPanelBtnAction"
            },
            "#searchEmailBtn": {
                tap: "searchEmailBtnAction"
            }
        }
    },
    showView: function(e) {
        Ext.Viewport.setActiveItem("searchphoneview");
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
    //Get form values and ajax to get the values from the server
    formPanelBtnAction: function() {
        var name1 = Ext.ComponentMgr.get("name1").getValue(),
            name2 = Ext.ComponentMgr.get("name2").getValue();
        if (!name1 && !name2) {
            Ext.getCmp("phoneResponsePanel").setHtml("<h3>Please input a value into the search fields</h3>");
            return;
        }
        Ext.Ajax.request({
            url: "app/scripts/phone.php",
            method: "POST",
            params:  {"name1": name1, "name2": name2},
            callback: function(options, success, response) {
                var r = response.responseText, v = "";
                Ext.getCmp("phoneResponsePanel").setHtml(r);
            },
            failure: function(response) {
                console.log(response);
            }
        });
    },
    searchEmailBtnAction: function () {
        Ext.Viewport.animateActiveItem("searchview", this.slideRightTransition);
    }
});