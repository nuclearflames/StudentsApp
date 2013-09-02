//Initialise the controller
Ext.define("StudentApp.controller.Blog", {
	extend: "Ext.app.Controller",
	config: {
        routes: {
            "blogs": "showView"
        },
		control: {
            //Events that will make the functions run, gets the ID and initilize a function
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
    showView: function(e) {
        Ext.Viewport.setActiveItem("blogview");
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
		type: 'slide', direction: 'right'
    },
    //Page swapping functions
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