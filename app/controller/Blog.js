Ext.define("StudentApp.controller.Blog", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			"#cityBlogBtn": {
				tap: "cityBlogBtnAction"
			},
			"#blogHome": {
				tap: "blogHomeBtnAction"
			},
			"#blogRBtn": {
				tap: "blogRBtnAction"
			}
		}
	},
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
		type: 'slide', direction: 'right'
    },
	cityBlogBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogview", this.slideRightTransition);
	},
	blogHomeBtnAction: function() {
        Ext.Viewport.animateActiveItem("mainview", this.slideLeftTransition);
	},
	blogRBtnAction: function() {
		Ext.Viewport.animateActiveItem("blogrview", this.slideLeftTransition);
	}
});