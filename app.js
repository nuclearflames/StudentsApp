Ext.application({
    name: 'StudentApp',
    views: ['Main','Maps', "Login", "Labstats", "Search", "Blog", "Register", "BlogResearch", "Edit", "Timetables", "News", "SearchPhone"],
    controllers:["Main", "Blog", "Labstats", "Login", "Register", "Maps", "Edit", "Timetables", "News", "Search", "SearchPhone"],
    models: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour", "News", "Maps"],
    stores: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour", "News", "Maps"],

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