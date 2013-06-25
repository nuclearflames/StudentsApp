Ext.define("StudentApp.controller.Login", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			fieldset: "fieldset"
		},
		control: {
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
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('StudentApp.view.Labstats'));
    }
});