Ext.define("StudentApp.controller.Blog", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			"#personalBlogBtn": {
				tap: "personalBlogBtnAction"
			},
			"#blogHome": {
				tap: "blogHomeBtnAction"
			}
		}
	},
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
		type: 'slide', direction: 'right'
    },
	personalBlogBtnAction: function() {
        Ext.Viewport.setActiveItem("personalblogview");
	},
	blogHomeBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogview", this.slideRightTransition);
	}
});