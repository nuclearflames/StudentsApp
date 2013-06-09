Ext.application({
    name: 'StudentApp',
    views: ['Main','Maps', "Login", "Labstats", "Search", "Blog", "Register", "BlogResearch", "Edit", "Timetables"],
    controllers:["Main", "Blog", "Labstats", "Login", "Register", "Maps", "Edit", "Timetables"],
    models: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour"],
    stores: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour"],

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