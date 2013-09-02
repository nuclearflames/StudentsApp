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
            "#timetableBtn": {
                tap: "timetableBtnAction"
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
        window.location.hash = "#maps";
        //Trigger resize of map incase window size has changed previously
        if (gMap) {
            google.maps.event.trigger(gMap, 'resize');
        }
    },
    labstatsBtnAction: function() {
        Ext.Viewport.setActiveItem("labstatsview");
        window.location.hash = "#pcs";
        //Used to resize the highchart if it exists
        if ($(".highcharts-container").length) {
            newWidth = $(".highcharts-container").parent().width();
            newHeight = $(".highcharts-container").parent().height();
            chart.setSize(newWidth, newHeight);
        }
    },
    searchBtnAction: function() {
        Ext.Viewport.setActiveItem("searchview");
        window.location.hash = "#search";
    },
    blogBtnAction: function() {
        Ext.Viewport.setActiveItem("blogview");
        window.location.hash = "#blog";
    },
    homeBtnAction: function () {
        Ext.Viewport.animateActiveItem("mainview", this.slideRightTransition);
        window.location.hash = "";
    },
    editBtnAction: function () {
        Ext.Viewport.animateActiveItem("settingsview", this.slideLeftTransition);
        window.location.hash = "#settings";
    },
    newsBtnAction: function () {
        Ext.Viewport.animateActiveItem("newsview", this.slideLeftTransition);
        window.location.hash = "#news";
    },
    timetableBtnAction: function () {
        Ext.Viewport.setActiveItem("timetableview");
        window.location.hash = "#timetable";
    },
    eventsBtnAction: function () {
        Ext.Viewport.animateActiveItem("eventsview", this.slideLeftTransition);
        window.location.hash = "#events";
    },
    cityBtnAction: function() {
        Ext.Viewport.setActiveItem("cityview");
        window.location.hash = "#city";
    },
    helpAbtBtnAction: function() {
        Ext.Viewport.setActiveItem("helpAbtview");
        window.location.hash = "#help";
    },
    menuExpandAction: function(e) {
        var menu = Ext.ComponentQuery.query("fieldset[_cls='expandMenu']"),
        newWidth, newHeight;
        for (i = 0; i < menu.length; i++) {
            if (menu[i].getHeight() === "100px") {
                menu[i].setHeight("70%");
            } else {
                menu[i].setHeight("100px");
            }
        }
        //Used to resize the highchart if it exists
        if ($(".highcharts-container").length) {
            newWidth = $(".highcharts-container").parent().width();
            newHeight = $(".highcharts-container").parent().height();
            chart.setSize(newWidth, newHeight);
        }
        //Trigger resize of map on page size change
        if (gMap) {
            google.maps.event.trigger(gMap, 'resize');
        }
    },
    //Controls the app start page
    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('StudentApp.view.Main'));
    }
});