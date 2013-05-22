Ext.define("StudentApp.controller.Login", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			fieldset: "fieldset"
		},
		control: {
			"#logInButton": {
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
		var username = Ext.getCmp("usernameTextField").getValue(),
			password = Ext.getCmp("passwordTextField").getValue(),
			jsonPost = {"username": username, "password": password},
			label = Ext.getCmp("signInFailedLabel");

		label.hide();

		Ext.Ajax.request({
			url: "app/scripts/login.php",
			method: "POST",
			params: jsonPost,
			success: function(response) {
				console.log("successfull password send");
				Ext.Viewport.animateActiveItem("mainview", this.slideLeftTransition);
			},
			failure: function(response) {
				console.log("fail password");
				label.show();
			}
		});
	},
	registerButton: function () {
		Ext.Viewport.animateActiveItem("registerview", this.slideLeftTransition);
	},
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('StudentApp.view.Login'));
    }
});