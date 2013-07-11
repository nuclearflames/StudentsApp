Ext.application({
    name: 'StudentApp',
    views: ['Main','Maps', "Labstats", "Search", "Blog", "BlogResearch", "Edit", "Timetables", "News", "SearchPhone", "Events", "City", "helpAbt"],
    controllers:["Main", "Blog", "Labstats", "Maps", "Edit", "Timetables", "News", "Search", "SearchPhone", "Events", "City"],
    models: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour", "News", "Maps", "Events", "EditView", "City"],
    stores: ["Labstats", "Feed", "FeedResearch", "Edit", "EditFont", "EditColour", "News", "Maps", "Events", "EditView", "City"],

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