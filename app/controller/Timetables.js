Ext.define("StudentApp.controller.Timetables", {
	extend: "Ext.app.Controller",
	config: {
		control: {
			"#editSearch": {
				keyup: "editSearchAction"
			}
		}
	},
    slideLeftTransition: {
        type: 'slide', direction: 'left'
    },
    slideRightTransition: {
		type: 'slide', direction: 'right'
    },
	editSearchAction: function() {
        console.log(this);
	}
});