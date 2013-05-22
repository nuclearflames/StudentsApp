Ext.define("StudentApp.controller.Main", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			"#home": {
				tap: "homeBtnAction"
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
        //Ext.Viewport.setActiveItem(Ext.create("StudentApp.view.Maps"));
    },
    labstatsBtnAction: function() {
        Ext.Viewport.setActiveItem("labstatsview");
        //Ext.getCmp("content").setActiveItem("loginview");
        //Ext.Viewport.setActiveItem(Ext.create("StudentApp.view.Maps"));
    },
    searchBtnAction: function() {
        Ext.Viewport.setActiveItem("searchview");
        //Ext.getCmp("content").setActiveItem("loginview");
        //Ext.Viewport.setActiveItem(Ext.create("StudentApp.view.Maps"));
    },
    blogBtnAction: function() {
        Ext.Viewport.setActiveItem("blogview");
        //Ext.getCmp("content").setActiveItem("loginview");
        //Ext.Viewport.setActiveItem(Ext.create("StudentApp.view.Maps"));
    },
    homeBtnAction: function () {
        Ext.Viewport.animateActiveItem("mainview", this.slideRightTransition);
    }
});