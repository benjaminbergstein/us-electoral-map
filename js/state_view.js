function StateView(application, stateName) {
  this.application = application;
  this.stateName = stateName;
  this.element = document.getElementById(stateName);
}

StateView.prototype.render = function() {
  var stateName;
  stateName = this.stateName;
  return "<div class='btn btn-link xs-block' id='"+stateName+"'>"+stateName+"</div>"
};

StateView.prototype.initialize = function() {
  this.setData();
  this.setEventListener();
};

StateView.prototype.setData = function() {
  var key, datum;
  key = this.stateName;
  datum = this.application.data[key];
  this.element.style.backgroundColor = PossibleFills[datum.fillKey];
};

StateView.prototype.setEventListener = function() {
  var stateView, element;
  stateView = this;
  element = stateView.element;
  element.addEventListener('click', function() {
    stateView.toggle();
  });
  stateView.setData();
};

StateView.prototype.toggle = function() {
  var application, stateName, currentFill, newFill;
  application = this.application;
  stateName = this.stateName;
  
  currentFill = application.data[stateName].fillKey;

  if (currentFill === undefined || currentFill > 2) {
    newFill = 1;
  } else {
    newFill = currentFill + 1;
  }
  
  application.data[stateName].fillKey = newFill;
  application.render();
};
