//Initialise the controller
Ext.define("StudentApp.controller.City", {
    extend: "Ext.app.Controller",
    config: {
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
            "#citySearch": {
                keyup: "cityFeedAction"
            }
        }
    },
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
        type: 'slide', direction: 'right'
    },
    //Page swapping functions
    cityBlogBtnAction: function() {
        Ext.Viewport.setActiveItem("blogview");
    },
    blogHomeBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogview", this.slideLeftTransition);
    },
    randEBlogBtnAction: function() {
        Ext.Viewport.animateActiveItem("blogrview", this.slideLeftTransition);
    },
    //Get the store and filter the list
    cityFeedAction: function() {
        var val = Ext.ComponentMgr.get("citySearch").getValue(),
        store = Ext.getStore("City");
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