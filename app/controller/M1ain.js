Ext.define("StudentApp.controller.Main", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			"#new": {
				tap: "mainPageCommand"
			}
		}
	},
	launch: function() {
		Ext.Viewport.add(Ext.create('StudentApp.view.Main'));
	},
    getSlideLeftTransition: function () {
        return { type: 'slide', direction: 'left' };
    },
    mainPageCommand: function() {
        console.log(this);
        Ext.Viewport.setActiveItem(Ext.create("StudentApp.view.Maps"));
    }
});