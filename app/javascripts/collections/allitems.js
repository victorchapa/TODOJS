var Activities = Backbone.Collection.extend({
    model: Activity,
    localStorage: new Backbone.LocalStorage("TODOS-Backbone"),
});

var activities = new Activities;
