import StateView from './state_view';

function StatesListView(application) {
  this.application = application;
  this.element = statesList;
}

StatesListView.prototype.render = function() {
  var application, helper;
  application = this.application;
  helper = this.application.helper;

  this.element.innerHTML = '';

  helper.forEachState(function(stateName) {
    var stateView;
    stateView = new StateView(application, stateName);
    stateView.render();
  });
};

export default StatesListView;
