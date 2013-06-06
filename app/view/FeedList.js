Ext.define('StudentApp.view.FeedList', {
extend: 'Ext.List',
xtype: 'feedList',
requires: ['StudentApp.store.Feed'],

config: {
    title: 'Feed',
    itemTpl: "<div class='contact'>{url} <strong>{title}</strong></div>",
    store: "Feed"
}
});