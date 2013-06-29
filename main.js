var TODO = {
  models: {},
  views: {},
  collections: {},

  initialize: function(){
    var router = new TODO.Router();
    Backbone.history.start();

  },
}

$(function(){
  TODO.initialize();
});
