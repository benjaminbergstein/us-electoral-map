const calculate = (data) => {
    const totals = {
      GOPTotal: 0,
      demsTotal: 0,
      neutralTotal: 0,
    };

    Object.entries(data).forEach(([stateName, datum]) => {
      if (datum.fillKey === 1) {
        totals.neutralTotal += datum['Electoral Votes'];
      } else if (datum.fillKey === 2) {
        totals.demsTotal += datum['Electoral Votes'];
      } else {
        totals.GOPTotal += datum['Electoral Votes'];
      }
    })

  return totals
}

export default calculate
