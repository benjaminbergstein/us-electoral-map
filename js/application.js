function Application(data) {
  var application;
  application = this;
  application.data = data;
  application.totalsView = new TotalsView(application);
  application.helper = new ApplicationHelper(application);
}

Application.prototype.initialize = function() {
  var application;
  application = this;
  
  container.innerHTML = '';
  
  application.map = new Datamap({
    element: container,
    scope: 'usa',
    data: application.data,
    
    fills: PossibleFills,
    
    geographyConfig: {
      highlightOnHover: false,
      popupTemplate: application.helper.popupTemplate
    },
    
    done: function (datamap) {
      var svg = datamap.svg;
      
      svg.selectAll('.datamaps-subunit').on('click', function(data) {
        var stateView;
        stateView = new StateView(application, data.id);
        stateView.toggle();
      });
    }
  });
  
  window.addEventListener('resize', function() {
    application.initialize();
  });
  
  application.statesListView = new StatesListView(this);
  application.render();
};

Application.prototype.render = function() {
  var application;
  application = this;
  application.map.updateChoropleth(application.data);
  application.statesListView.render();
  application.totalsView.calculate();
};