//Initialise the controller
Ext.define("StudentApp.controller.News", {
    extend: "Ext.app.Controller",
    config: {
        routes: {
            "news": "showView"
        },
        control: {
            //Events that will make the functions run, gets the ID and initilize a function
            "#cityBlogBtn": {
                tap: "cityBlogBtnAction"
            },
            "#blogHome": {
                tap: "blogHomeBtnAction"
            },
            "#randEBlogBtn": {
                tap: "randEBlogBtnAction"
            },
            "#newsSearch": {
                keyup: "newsFeedAction"
            }
        }
    },
    showView: function(e) {
        Ext.Viewport.setActiveItem("newsview");
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
    //This will filter the news feed store
    newsFeedAction: function() {
        var val = Ext.ComponentMgr.get("newsSearch").getValue(),
        store = Ext.getStore("News");
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