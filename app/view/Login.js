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
                xtype: "button",
                text: 'Home',
                ui: "back",
                id: "home"
            },{
                xtype: "label",
                html: "Login failed. Please enter the correct credentials.",
                id: "signInFailedLabel",
                hidden: true,
                hideAnimation: "fadeOut",
                showAnimation: "fadeIn"
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
                    id: "passwordTextField",
                    name: "password",
                    required: true
                }]
            },{
                    xtype: "button",
                    id: "logInButton",
                    ui: "action",
                    padding: "10px",
                    text: "Log in"
            }]
        }]
	},
	initialize: function () {
		this.callParent(arguments);
	}
});