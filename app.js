Ext.application({
    name: 'StudentApp',
    views: ['Main','Maps', "Login", "Labstats", "Search", "Blog", "personalBlog", "Register"],
    controllers:["Main", "Blog", "Labstats", "Login", "Register"],
    models: ["Labstats"],
    stores: ["Labstats"],

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