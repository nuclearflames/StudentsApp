Ext.define("StudentApp.controller.Events", {
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
			},
			"#eventsSearch": {
				keyup: "eventsSearchAction"
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
        Ext.Viewport.setActiveItem("blogview");
	},
	blogHomeBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogview", this.slideLeftTransition);
	},
	randEBlogBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogrview", this.slideLeftTransition);
	},
	eventsSearchAction: function() {
        var val = Ext.ComponentMgr.get("eventsSearch").getValue(),
        store = Ext.getStore("Events");
        store.clearFilter();
        store.filter("title", val);
        if(val === "") {
        	store.filter("title", val);
        }
        //Store Clearer
        $(".x-clear-icon").click(function() {
            store.clearFilter();
        });
	}
});