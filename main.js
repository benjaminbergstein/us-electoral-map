var Blue, Neutral, Red, PossibleFills, data, map;

Blue = '#ABDFFF';
Neutral = '#DADAD0';
Red = '#FF0000';

PossibleFills = {
  defaultFill: Neutral,
  1: Neutral,
  2: Blue,
  3: Red
};

data = window.presidentialElectionResults[2017];

function forEachState(callback) {
  for (var i in data) callback(i);
}

function calculateTotals() {
  var i, totals;
  totals = {};
  totals.GOPTotal = 0;
  totals.demsTotal = 0;
  totals.neutralTotal = 0;
  
  for (i in data) {
    var datum = data[i];
    
    if (datum.fillKey === 1) {
      totals.neutralTotal += datum['Electoral Votes'];
    } else if (datum.fillKey === 2) {
      totals.demsTotal += datum['Electoral Votes'];
    } else {
      totals.GOPTotal += datum['Electoral Votes'];
    }
  }
  
  GOPTotal.innerHTML = totals.GOPTotal;
  demsTotal.innerHTML = totals.demsTotal;
  neutralTotal.innerHTML = totals.neutralTotal;
}

function popupTemplate(state, data) {
  return '<span style="color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">' + state.properties.name + ": " + data['Electoral Votes'] + '</span>'
}

function renderStates() {
  function updateState(state) {
    var key, datum;
    key = state.id;
    datum = data[key];
    state.style.backgroundColor = PossibleFills[datum.fillKey];
  }
  
  var html = '';
  
  forEachState(function(state) {
    html = html + "<div class='btn btn-link xs-block' id='"+state+"'>"+state+"</div>"
  });
  
  statesList.innerHTML = html;
  
  function stateListener(target) {
    toggleState(this);
  }
  
  forEachState(function(state) {
    var element;
    element = document.getElementById(state);
    element.addEventListener('click', stateListener);
    updateState(element);
  });
}

function toggleState(state) {
  var currentFill, newFill;
  
  currentFill = data[state.id].fillKey;
  
  if (currentFill === undefined || currentFill > 2) {
    newFill = 1;
  } else {
    newFill = currentFill + 1;
  }
  
  data[state.id].fillKey = newFill;
  map.updateChoropleth(data);
  
  renderStates();
  calculateTotals();
}

function render() {
  container.innerHTML = '';
  
  map = new Datamap({
    element: container,
    scope: 'usa',
    data: data,
  
    fills: PossibleFills,
  
    geographyConfig: {
      highlightOnHover: false,
      popupTemplate: popupTemplate
    },
  
    done: function (datamap) {
      var svg = datamap.svg;
      svg.selectAll('.datamaps-subunit').on('click', toggleState);
    }
  });
  
  renderStates();
  calculateTotals();
}

render();
window.addEventListener('resize', render);
