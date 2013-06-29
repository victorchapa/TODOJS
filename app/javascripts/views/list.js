var App = Backbone.View.extend({
    
    el: "#APPContainer",

    events: {
        "keypress #newActivity " : "create",
        "click #selectAll "      :  "selectAll", 
    },
    
    initialize: function(){
        activities.fetch({
            success: function(m, r){
                console.log("Do it!");         
            },
            error: function(m, r){
                console.log("Error!");
                console.log(r.responseText)
            },
        });
        this.render();
    },

    render: function(){
    },
    
    create: function(e){
        var value = $(e.target).val();
        if (e.keyCode != 13) return;
        if (value == "") return;
        activities.create({name: value});
        $("#newActivity").val("");
    },
});

var app = new App;
