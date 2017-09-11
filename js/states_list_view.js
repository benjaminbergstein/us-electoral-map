function StatesListView(application) {
  this.application = application;
}

StatesListView.prototype.render = function() {
  var application, html, helper;
  application = this.application;
  html = '';
  helper = this.application.helper;
  
  helper.forEachState(function(stateName) {
    var state;
    state = new StateView(application, stateName);
    html = html + state.render();
  });
  
  statesList.innerHTML = html;
  
  helper.forEachState(function(state) {
    var state;
    state = new StateView(application, state);
    state.initialize();
  });
};