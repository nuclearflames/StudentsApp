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
    }
});