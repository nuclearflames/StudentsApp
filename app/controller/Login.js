//Initialise the controller
Ext.define("StudentApp.controller.Login", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			fieldset: "fieldset"
		},
		control: {
            //Events that will make the functions run, gets the ID and initilize a function
			"#loginBtn": {
				tap: "loginButton"
			},
			"#registerButton": {
				tap: "registerButton"
			}
		}
	},
	slideLeftTransition: {
		type: 'slide', direction: 'left'
	},
	slideRightTransition: {
		type: 'slide', direction: 'right'
	},
	//Will get the form details and post them to the php script, will login if details are correct else displays error labels
	loginButton: function () {
		var email = Ext.getCmp("emailTextField").getValue(),
			password = Ext.getCmp("passwordTextField").getValue(),
			jsonPost = {"email": email, "password": password},
			label = Ext.get("incorrectDetailsLabel"),
			labelC = Ext.get("connectingLoginLabel"),
			Viewport = this;

		labelC.show();
		if(label){label.hide();}

		Ext.Ajax.request({
			url: "app/scripts/login.php",
			method: "POST",
			params: jsonPost,
			callback: function(options, success, response) {
				var r = response.responseText;
				if(r === "Login Success") {
					Ext.Viewport.animateActiveItem("mainview", Viewport.slideLeftTransition);
				} else {
					label.show();
					labelC.hide();
				}
			},
			failure: function(response) {
				label.show();
				labelC.hide();
			}
		});
	},
	registerButton: function () {
		Ext.Viewport.animateActiveItem("registerview", this.slideLeftTransition);
	},
	//Controls the app start page
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('StudentApp.view.Login'));
    }
});