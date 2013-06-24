Ext.define("StudentApp.controller.Main", {
    extend: "Ext.app.Controller",
    config: {
        control: {
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
            }
        }
    },
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
    }
});