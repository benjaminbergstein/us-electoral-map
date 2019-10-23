function TotalsView(application) {
  this.application = application;
}

TotalsView.prototype.calculate = function() {
  var i, data, totals;
  data = this.application.data;
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
};

export default TotalsView;
