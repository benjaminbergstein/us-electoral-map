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

data = {"AK":{"fillKey":3,"Electoral Votes":3},"DE":{"fillKey":2,"Electoral Votes":3},"DC":{"fillKey":2,"Electoral Votes":3},"MT":{"fillKey":3,"Electoral Votes":3},"ND":{"fillKey":3,"Electoral Votes":3},"SD":{"fillKey":3,"Electoral Votes":3},"VT":{"fillKey":2,"Electoral Votes":3},"WY":{"fillKey":3,"Electoral Votes":3},"NH":{"fillKey":2,"Electoral Votes":4},"HI":{"fillKey":2,"Electoral Votes":4},"ID":{"fillKey":3,"Electoral Votes":4},"ME":{"fillKey":2,"Electoral Votes":2},"ME1":{"fillKey":2,"Electoral Votes":1},"ME2":{"fillKey":3,"Electoral Votes":1},"RI":{"fillKey":2,"Electoral Votes":4},"NE":{"fillKey":3,"Electoral Votes":2},"NE1":{"fillKey":3,"Electoral Votes":1},"NE2":{"fillKey":3,"Electoral Votes":1},"NE3":{"fillKey":3,"Electoral Votes":1},"NM":{"fillKey":2,"Electoral Votes":5},"WV":{"fillKey":3,"Electoral Votes":5},"AR":{"fillKey":3,"Electoral Votes":6},"IA":{"fillKey":3,"Electoral Votes":6},"KS":{"fillKey":3,"Electoral Votes":6},"MS":{"fillKey":3,"Electoral Votes":6},"NV":{"fillKey":2,"Electoral Votes":6},"UT":{"fillKey":3,"Electoral Votes":6},"CT":{"fillKey":2,"Electoral Votes":7},"OK":{"fillKey":3,"Electoral Votes":7},"OR":{"fillKey":2,"Electoral Votes":7},"KY":{"fillKey":3,"Electoral Votes":8},"LA":{"fillKey":3,"Electoral Votes":8},"AL":{"fillKey":3,"Electoral Votes":9},"CO":{"fillKey":2,"Electoral Votes":9},"SC":{"fillKey":3,"Electoral Votes":9},"MD":{"fillKey":2,"Electoral Votes":10},"MN":{"fillKey":2,"Electoral Votes":10},"MO":{"fillKey":3,"Electoral Votes":10},"WI":{"fillKey":3,"Electoral Votes":10},"AZ":{"fillKey":3,"Electoral Votes":11},"IN":{"fillKey":3,"Electoral Votes":11},"MA":{"fillKey":2,"Electoral Votes":11},"TN":{"fillKey":3,"Electoral Votes":11},"WA":{"fillKey":2,"Electoral Votes":12},"VA":{"fillKey":2,"Electoral Votes":13},"NJ":{"fillKey":2,"Electoral Votes":14},"NC":{"fillKey":3,"Electoral Votes":15},"GA":{"fillKey":3,"Electoral Votes":16},"MI":{"fillKey":3,"Electoral Votes":16},"OH":{"fillKey":3,"Electoral Votes":18},"IL":{"fillKey":2,"Electoral Votes":20},"PA":{"fillKey":3,"Electoral Votes":20},"NY":{"fillKey":2,"Electoral Votes":29},"FL":{"fillKey":3,"Electoral Votes":29},"TX":{"fillKey":3,"Electoral Votes":38},"CA":{"fillKey":2,"Electoral Votes":55}};

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

function renderPartialStates() {
  function updateState(state) {
    var key, datum;
    key = state.id;
    datum = data[key];
    state.style.backgroundColor = PossibleFills[datum.fillKey];
  }
  
  var html = '';
  
  forEachState(function(state) {
    html = html + "<div class='btn btn-link' id='"+state+"'>"+state+"</div>"
  });
  
  statesList.innerHTML = html;
  
  forEachState(function(state) {
    var element;
    element = document.getElementById(state);
    element.addEventListener('click', partialStateListener);
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
  
  renderPartialStates();
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
  
  calculateTotals();
}

function partialStateListener(target) {
  var state;
  
  state = data[this.id];
  
  toggleState(this);
}

render();
renderPartialStates();
window.addEventListener('resize', render);
