//Initialise the controller
Ext.define("StudentApp.controller.Register", {
	extend: "Ext.app.Controller",
	config: {
		refs: {
			fieldset: "fieldset"
		},
		control: {
            //Events that will make the functions run, gets the ID and initilize a function
			"#logInButton": {
				tap: "loginButton"
			},
			"#loginHome": {
				tap: "loginHome"
			},
			"#confirmRegisterButton": {
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
    //This will initiliaze the registration script, gets the details from the form and ajax it
	registerButton: function () {
		var username = Ext.getCmp("registerUsernameTextField").getValue(),
			password = Ext.getCmp("registerPasswordField").getValue(),
			email = Ext.getCmp("registerEmailTextField").getValue(),
			jsonPost = {"username": username, "password": password, "email": email},
			labelProblem = Ext.getCmp("thereWasaProblemLabel"),
			labelMore = Ext.getCmp("moreDetailsLabel"),
			duplicateEmail = Ext.getCmp("duplicateEmailLabel"),
			labelLogin = Ext.getCmp("registerLoginLabel"),
			labelEmail = Ext.getCmp("incorrectEmailLabel");

		labelProblem.hide();
		labelMore.hide();
		labelEmail.hide();
		labelLogin.hide();
		duplicateEmail.hide();

		Ext.Ajax.request({
			url: "app/scripts/register.php",
			method: "POST",
			params: jsonPost,
			success: function(response) {
				console.log(response);
			},
			failure: function(response) {
				console.log(response);
			},
			callback: function(options, success, response) {
				if (response.responseText === "Empty Values") {
					labelProblem.show();
					labelMore.show();
				} else if (response.responseText === "Successfull Insertion into DB") {
					Ext.Viewport.animateActiveItem("loginview", {type: 'slide', direction: 'right'});
					labelLogin.show();
				} else if (response.responseText === "Bad Email Address") {
					labelProblem.show();
					labelEmail.show();
				} else if (response.responseText.match(/Duplicate/g)) {
					labelProblem.show();
					duplicateEmail.show();
				} else {
					console.log(response.responseText);
				}
			}
		});

		//Ext.Viewport.animateActiveItem("loginview", this.slideRightTransition);
	},
	loginHome: function () {
		Ext.Viewport.animateActiveItem("loginview", this.slideRightTransition);
	}
});