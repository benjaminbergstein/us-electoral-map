var Colors = {
  BLUE: '#ABDFFF',
  NEUTRAL: '#DADAD0',
  RED: '#FF0000'
};

var mapData = {"AK":{"fillKey":3,"Electoral Votes":3},"DE":{"fillKey":2,"Electoral Votes":3},"DC":{"fillKey":2,"Electoral Votes":3},"MT":{"fillKey":3,"Electoral Votes":3},"ND":{"fillKey":3,"Electoral Votes":3},"SD":{"fillKey":3,"Electoral Votes":3},"VT":{"fillKey":2,"Electoral Votes":3},"WY":{"fillKey":3,"Electoral Votes":3},"NH":{"fillKey":2,"Electoral Votes":4},"HI":{"fillKey":2,"Electoral Votes":4},"ID":{"fillKey":3,"Electoral Votes":4},"ME":{"fillKey":2,"Electoral Votes":4},"RI":{"fillKey":2,"Electoral Votes":4},"NE":{"fillKey":3,"Electoral Votes":5},"NM":{"fillKey":2,"Electoral Votes":5},"WV":{"fillKey":3,"Electoral Votes":5},"AR":{"fillKey":3,"Electoral Votes":6},"IA":{"fillKey":3,"Electoral Votes":6},"KS":{"fillKey":3,"Electoral Votes":6},"MS":{"fillKey":3,"Electoral Votes":6},"NV":{"fillKey":2,"Electoral Votes":6},"UT":{"fillKey":3,"Electoral Votes":6},"CT":{"fillKey":2,"Electoral Votes":7},"OK":{"fillKey":3,"Electoral Votes":7},"OR":{"fillKey":2,"Electoral Votes":7},"KY":{"fillKey":3,"Electoral Votes":8},"LA":{"fillKey":3,"Electoral Votes":8},"AL":{"fillKey":3,"Electoral Votes":9},"CO":{"fillKey":2,"Electoral Votes":9},"SC":{"fillKey":3,"Electoral Votes":9},"MD":{"fillKey":2,"Electoral Votes":10},"MN":{"fillKey":2,"Electoral Votes":10},"MO":{"fillKey":3,"Electoral Votes":10},"WI":{"fillKey":3,"Electoral Votes":10},"AZ":{"fillKey":3,"Electoral Votes":11},"IN":{"fillKey":3,"Electoral Votes":11},"MA":{"fillKey":2,"Electoral Votes":11},"TN":{"fillKey":3,"Electoral Votes":11},"WA":{"fillKey":2,"Electoral Votes":12},"VA":{"fillKey":2,"Electoral Votes":13},"NJ":{"fillKey":2,"Electoral Votes":14},"NC":{"fillKey":3,"Electoral Votes":15},"GA":{"fillKey":3,"Electoral Votes":16},"MI":{"fillKey":3,"Electoral Votes":16},"OH":{"fillKey":3,"Electoral Votes":18},"IL":{"fillKey":2,"Electoral Votes":20},"PA":{"fillKey":3,"Electoral Votes":20},"NY":{"fillKey":2,"Electoral Votes":29},"FL":{"fillKey":3,"Electoral Votes":29},"TX":{"fillKey":3,"Electoral Votes":38},"CA":{"fillKey":2,"Electoral Votes":55}};

function calculateTotals() {
  var i, totals;
  totals = {};
  totals.GOPTotal = 0;
  totals.demsTotal = 0;
  totals.neutralTotal = 0;
  
  for (i in mapData) {
    var datum = mapData[i];
    
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
};

var map;

function render() {
  container.innerHTML = '';
  map = new Datamap({
    element: document.getElementById('container'),
    scope: 'usa',
    data: mapData,
    
    fills: {
      defaultFill: Colors.NEUTRAL,
      1: Colors.NEUTRAL,
      2: Colors.BLUE,
      3: Colors.RED,
    },
    
    geographyConfig: {
      highlightOnHover: false,
      popupTemplate: function (geo, data) {
        return '<span style="color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">'+geo.properties.name + ": "+ data['Electoral Votes']+'</span>'
      }
    },
    
    done: function (datamap) {
      datamap.svg.selectAll('.datamaps-subunit').on('click', function (geography) {
        var currentFill = mapData[geography.id].fillKey;
        var newFill;
        
        if (currentFill === undefined) {
          newFill = 1;
        } else {
          newFill = currentFill + 1;
        }
        
        if (newFill > 3) {
          newFill = 1
        }
        
        mapData[geography.id].fillKey = newFill;
        map.updateChoropleth(mapData);
        calculateTotals();
      });
    }
  });
  
  calculateTotals();
};

render();
window.addEventListener('resize', function() { render(); });
