Ext.application({
    name: 'StudentApp',
    views: ['Main','Maps', "Login", "Labstats", "Search", "Blog", "Register", "BlogResearch", "Edit"],
    controllers:["Main", "Blog", "Labstats", "Login", "Register", "Maps", "Edit"],
    models: ["Labstats", "Feed", "FeedResearch", "Edit"],
    stores: ["Labstats", "Feed", "FeedResearch", "Edit"],

    viewport: {
        layout: {
            type: 'card',
            animation: {
                type: 'slide',
                duration: 300
            }
        }
    }
});