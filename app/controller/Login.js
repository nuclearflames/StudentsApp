Ext.define("StudentApp.controller.Login", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			fieldset: "fieldset"
		},
		control: {
			"#logInButton": {
				tap: "loginLogic"
			}
		}
	},
	slideLeftTransition: {
		type: 'slide', direction: 'left'
	},
	slideRightTransition: {
		type: 'slide', direction: 'right'
	},
	loginLogic: function () {
		var username = Ext.getCmp("usernameTextField").getValue(),
			password = Ext.getCmp("passwordTextField").getValue(),
			jsonPost = {"user": username, "password": password},
			label = Ext.getCmp("signInFailedLabel");

		label.hide();

		console.log(jsonPost);

		Ext.Ajax.request({
			url: "app/scripts/login.php",
			method: "POST",
			params: jsonPost,
			success: function(response) {
				console.log("successfull password send");
			},
			failure: function(response) {
				console.log("fail password");
			}
		});
	}
});