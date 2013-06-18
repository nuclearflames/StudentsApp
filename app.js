Ext.application({
    name: 'StudentApp',
    views: ['Main','Maps', "Login", "Labstats", "Search", "Blog", "Register", "BlogResearch", "Edit", "Timetables", "News", "SearchPhone", "Events"],
    controllers:["Main", "Blog", "Labstats", "Login", "Register", "Maps", "Edit", "Timetables", "News", "Search", "SearchPhone", "Events"],
    models: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour", "News", "Maps", "Events"],
    stores: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour", "News", "Maps", "Events"],

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