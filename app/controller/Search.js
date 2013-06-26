//Initialise the controller
Ext.define("StudentApp.controller.Search", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
            "#formPanelBtn": {
                tap: "formPanelBtnAction"
            },
            "#searchPhoneBtn": {
                tap: "searchPhoneBtnAction"
            }
        }
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
    //Get the search terms and send to the screen
    formPanelBtnAction: function() {
        var familyField = Ext.ComponentMgr.get("familyField").getValue(),
            givenField = Ext.ComponentMgr.get("givenField").getValue(),
            formCategory = Ext.ComponentMgr.get("formCategory").getGroupValue();
        Ext.Ajax.request({
            url: "app/scripts/email.php",
            method: "POST",
            params:  {"family": familyField, "given": givenField, "category": formCategory},
            callback: function(options, success, response) {
                var r = response.responseText, v = "";
                Ext.getCmp("emailResponsePanel").setHtml(r);
            },
            failure: function(response) {
                console.log(response);
            }
        });
    },
    searchPhoneBtnAction: function () {
        Ext.Viewport.animateActiveItem("phoneview", this.slideLeftTransition);
    }
});