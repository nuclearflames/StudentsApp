Ext.define("StudentApp.view.Register", {
	extend:'Ext.Container',
	alias: "widget.registerview",
	xtype: "registerview",
	config: {
		layout: {type: 'vbox'},
		fullscreen: true,
		items: [{
			xtype: "panel",
			flex: 1,
			items: [{
				xtype: "button",
				text: 'Home',
                iconCls: "home",
				ui: "back",
				id: "loginHome"
			},{
				xtype: "label",
				html: "There was a problem with the registration:",
				hidden: true,
				id: "thereWasaProblemLabel"
			},{
				xtype: "label",
				html: "Please enter information into all the fields",
				hidden: true,
				id: "moreDetailsLabel"
			},{
				xtype: "label",
				html: "Please enter a valid email address",
				hidden: true,
				id: "incorrectEmailLabel"
			},{
				xtype: "label",
				html: "The email address entered already exists",
				hidden: true,
				id: "duplicateEmailLabel"
			}]
		},{
			xtype: "panel",
			flex: 8,
			items: [{
				xtype: "fieldset",
				items: [{
					xtype: "textfield",
					placeHolder: "Username",
					id: "registerUsernameTextField",
					name: "password",
					required: true
				},{
					xtype: "textfield",
					placeHolder: "Password",
					inputType: 'password',
					id: "registerPasswordField",
					name: "password",
					required: true
				},{
					xtype: "textfield",
					placeHolder: "Email",
					id: "registerEmailTextField",
					name: "password",
					required: true
				}]
			},{
				xtype: "button",
				text: 'Sign Up!',
				ui: "confim",
				id: "confirmRegisterButton"
			}]
		}]
	}
});