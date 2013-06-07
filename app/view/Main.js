Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        fullscreen: true,
        layout: "vbox",
        items: [{
            xtype: 'panel',
            flex: 7,
            items: [{
                xtype: "fieldset",
                items: [{
                    xtype: "label",
                    html: "<span>Welcome to the webapp, please, click around...</span>"
                },{
                    xtype: "fieldset",
                    items: [{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Edit your profile',
                            id: "editBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'University Maps',
                            id: "mapBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Labstats',
                            id: "labstatsBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City Blogs',
                            id: "blogBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City News',
                            id: "newsBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'City Events',
                            id: "eventsBtn"
                        }]
                    },{
                        xtype: "fieldset",
                        items: [{
                            xtype: "button",
                            iconCls: 'action',
                            iconMask: true,
                            text: 'Search',
                            id: "searchBtn",
                            pack: "center"
                        }]
                    }]
                }]
            }]
        }]
    },
    initialize: function() {
        this.callParent();
        Ext.Ajax.request({
            url: "app/scripts/login_success.php",
            callback: function(options, success, response) {
                var jsonObj = JSON.parse(response.responseText);
                if (jsonObj.userID !== null) {
                    $("link[href*='resources/css/']").attr("href", "resources/css/" + jsonObj.layoutName + ".css");
                    $(".x-layout-card-item").css("background", jsonObj.layoutColor);
                    $("span").css("font-size", jsonObj.layoutFontSize);
                    $("h3").css("font-size", jsonObj.layoutFontSize);
                }
            }
        });
    }
});