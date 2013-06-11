Ext.define("StudentApp.view.Login", {
	extend: "Ext.Container",
	alias: "widget.loginview",
	config: {
        layout: {type: "vbox"},
        fullscreen: true,
        items: [{
            xtype: "panel",
            flex: 1,
            items: [{
                    xtype: "image",
                    src: 'http://s1.city.ac.uk/i/city-logo-1894.png',
                    height: "50px",
                    width: "auto"
                },{
                    xtype: "label",
                    html: "Incorrect login details please register or try again",
                    hidden: true,
                    id: "incorrectDetailsLabel"
                },{
                    xtype: "label",
                    html: "You have successfully registered an account with us, please login",
                    hidden: true,
                    id: "registerLoginLabel"
                },{
                    xtype: "label",
                    html: "Connecting to Server...",
                    hidden: true,
                    id: "connectingLoginLabel"
                }]
            },{
            xtype: "panel",
            flex: 8,
            items: [{
                xtype: "fieldset",
                title: "Please Login",
                items: [{
                    xtype: "textfield",
                    placeHolder: "Username",
                    id: "usernameTextField",
                    name: "username",
                    required: true
                },{
                    xtype: "textfield",
                    placeHolder: "Password",
                    inputType: 'password',
                    id: "passwordTextField",
                    name: "password",
                    required: true
                },{
                    items:[{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            //id: "logInButton",
                            id: "loginBtn",
                            ui: "confirm",
                            padding: "10px",
                            text: "Log in"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            //id: "logInButton",
                            id: "registerButton",
                            ui: "action",
                            padding: "10px",
                            text: "Register"
                        }]
                    }]
                }]
            }]
        }]
	},
	initialize: function () {
		this.callParent(arguments);
	}
});