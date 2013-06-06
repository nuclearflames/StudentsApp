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
		var username = Ext.getCmp("usernameTextField").getValue(),
			password = Ext.getCmp("passwordTextField").getValue(),
			jsonPost = {"username": username, "password": password},
			label = Ext.get("incorrectDetailsLabel"),
			Viewport = this;

		if(label){label.hide();}

		Ext.Ajax.request({
			url: "app/scripts/login.php",
			method: "POST",
			params: jsonPost,
			callback: function(options, success, response) {
				var r = response.responseText;
				console.log(r);
				if(r === "Wrong username/password") {
					label.show();
				} else {
					Ext.Viewport.animateActiveItem("mainview", Viewport.slideLeftTransition);
				}
			},
			failure: function(response) {
				label.show();
			}
		});
	},
	registerButton: function () {
		console.log(Ext.Viewport);
		console.log(this);
		Ext.Viewport.animateActiveItem("registerview", this.slideLeftTransition);
	},
	launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();
        Ext.Viewport.add(Ext.create('StudentApp.view.Main'));
        var gMap = "avsdv";
    }
});