//Initialise the controller
Ext.define("StudentApp.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
            "#home": {
                tap: "homeBtnAction"
            },
            "#editBtn": {
                tap: "editBtnAction"
            },
            "#mapBtn": {
                tap: "mapsBtnAction"
            },
            "#labstatsBtn": {
                tap: "labstatsBtnAction"
            },
            "#searchBtn": {
                tap: "searchBtnAction"
            },
            "#blogBtn": {
                tap: "blogBtnAction"
            },
            "#newsBtn": {
                tap: "newsBtnAction"
            },
            "#eventsBtn": {
                tap: "eventsBtnAction"
            },
            "#cityBtn": {
                tap: "cityBtnAction"
            },
            "#helpAbtBtn": {
                tap: "helpAbtBtnAction"
            },
            "button[action=menuExpand]": {
                tap: "menuExpandAction"
            }
        }
    },
    //All of the slide transitions to different pages
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
    mapsBtnAction: function() {
        Ext.Viewport.setActiveItem("mapsview");
    },
    labstatsBtnAction: function() {
        Ext.Viewport.setActiveItem("labstatsview");
    },
    searchBtnAction: function() {
        Ext.Viewport.setActiveItem("searchview");
    },
    blogBtnAction: function() {
        Ext.Viewport.setActiveItem("blogview");
    },
    homeBtnAction: function () {
        Ext.Viewport.animateActiveItem("mainview", this.slideRightTransition);
    },
    editBtnAction: function () {
        Ext.Viewport.animateActiveItem("settingsview", this.slideLeftTransition);
    },
    newsBtnAction: function () {
        Ext.Viewport.animateActiveItem("newsview", this.slideLeftTransition);
    },
    eventsBtnAction: function () {
        Ext.Viewport.animateActiveItem("eventsview", this.slideLeftTransition);
    },
    cityBtnAction: function() {
        Ext.Viewport.setActiveItem("cityview");
    },
    helpAbtBtnAction: function() {
        Ext.Viewport.setActiveItem("helpAbtview");
    },
    menuExpandAction: function(e) {
        var menu = Ext.ComponentQuery.query("fieldset[_cls='expandMenu']");
        console.log(menu);
        for (i = 0; i < menu.length; i++) {
            if (menu[i].getHeight() === "100px") {
                menu[i].setHeight("70%");
            } else {
                menu[i].setHeight("100px");
            }
        }
    },
    //Controls the app start page
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('StudentApp.view.SearchPhone'));
    }
});