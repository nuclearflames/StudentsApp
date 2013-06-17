Ext.define("StudentApp.controller.SearchPhone", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            "#formPhonePanelBtn": {
                tap: "formPanelBtnAction"
            },
            "#searchEmailBtn": {
                tap: "searchEmailBtnAction"
            }
        }
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
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