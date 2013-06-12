Ext.define("StudentApp.store.News", {
	extend: "Ext.data.Store",
	model: "StudentApp.model.News",
	proxy: {
		type: "ajax",
		url: "http://search.city.ac.uk/s/search.json?collection=city-news&query=!kjkfds",
		reader: {
			type: "json",
			record: "results"
		}
	},
	autoLoad: true
});