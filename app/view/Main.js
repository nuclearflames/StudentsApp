Ext.define('StudentApp.view.Main', {
    extend: 'Ext.Container',
    alias: "widget.mainview",
    config: {
        fullscreen: true,
        layout: "vbox",
        items: [{
            xtype: 'panel',
            flex: 7,
            items:
                [{
                    xtype: "label",
                    html: "<span>Welcome to the webapp, please, click around...</span>"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'Edit your profile',
                    id: "editBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'University Maps',
                    id: "mapBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'Labstats',
                    id: "labstatsBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'City Blogs',
                    id: "blogBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'City News',
                    id: "newsBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'City Events',
                    id: "eventsBtn"
                },{
                    xtype: "button",
                    iconCls: 'action',
                    iconMask: true,
                    text: 'Search',
                    id: "searchBtn",
                    pack: "center"
                }]
            },{
                xtype: "panel"
            }
        ]
    },
    initialize: function() {
        this.callParent();
        Ext.Ajax.request({
            url: "app/scripts/login_success.php",
            callback: function(options, success, response) {
                var jsonObj = JSON.parse(response.responseText);
                $("link[href*='resources/css/']").attr("href", "resources/css/" + jsonObj.layoutName + ".css");
                $(".x-layout-card-item").css("background", jsonObj.layoutColor);
                $("span").css("font-size", jsonObj.layoutFontSize);
                $("h3").css("font-size", jsonObj.layoutFontSize);
            }
        });
    }
});