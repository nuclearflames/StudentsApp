//Initialise the controller
Ext.define("StudentApp.controller.Edit", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			"#cityBlogBtn": {
				tap: "cityBlogBtnAction"
			},
			"#blogHome": {
				tap: "blogHomeBtnAction"
			},
			"#randEBlogBtn": {
				tap: "randEBlogBtnAction"
			}
		}
	},
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
		type: 'slide', direction: 'right'
    },
    //Page navigation
	cityBlogBtnAction: function() {
        Ext.Viewport.setActiveItem("blogview");
	},
	blogHomeBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogview", this.slideLeftTransition);
	},
	randEBlogBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogrview", this.slideLeftTransition);
	}
});