function Application(data) {
  var application;
  application = this;
  application.data = data;
  application.totalsView = new TotalsView(application);
  application.helper = new ApplicationHelper(application);
}

Application.Blue = '#ABDFFF';
Application.Neutral = '#DADAD0';
Application.Red = '#FF0000';

Application.PossibleFills = {
  defaultFill: Application.Neutral,
  1: Application.Neutral,
  2: Application.Blue,
  3: Application.Red
};

Application.prototype.initialize = function() {
  var application;
  application = this;
  application.statesListView = new StatesListView(this);
  
  container.innerHTML = '';
  
  application.renderMap();
  application.updateAllWidgets();
  
  window.addEventListener('resize', function() {
    application.initialize();
  });
};

Application.prototype.renderMap = function() {
  var application;
  application = this;
  
  application.map = new Datamap({
    element: container,
    scope: 'usa',
    data: application.data,
    
    fills: Application.PossibleFills,
    
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
};

Application.prototype.updateAllWidgets = function() {
  var application;
  application = this;
  application.map.updateChoropleth(application.data);
  application.statesListView.render();
  application.totalsView.calculate();
};