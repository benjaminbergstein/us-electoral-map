import ApplicationHelper from './application_helper';
import StatesListView from './states_list_view';
import StateView from './state_view';
import TotalsView from './totals_view';
import { PossibleFills } from './constants';
import Datamap from "datamaps/dist/datamaps.usa.js";


class Application {
  constructor(data) {
    const application = this.application = this;
    this.data = data;
    this.totalsView = new TotalsView(application);
    this.helper = new ApplicationHelper(application);
    this.initialize = this.initialize.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.updateAllWidgets = this.updateAllWidgets.bind(this);
  }

  initialize() {
    this.statesListView = new StatesListView(this);
    container.innerHTML = '';
    this.renderMap();
    this.updateAllWidgets();
    window.addEventListener('resize', function() {
      application.initialize();
    });
  }

  renderMap() {
    this.map = new Datamap({
      element: container,
      scope: 'usa',
      data: this.data,
      fills: PossibleFills,
      geographyConfig: {
        highlightOnHover: false,
        popupTemplate: this.helper.popupTemplate
      },
      done: (datamap) => {
        const svg = datamap.svg;
        svg.selectAll('.datamaps-subunit').on('click', function(data) {
          var stateView;
          stateView = new StateView(application, data.id);
          stateView.toggle();
        });
      }
    });
  }

  updateAllWidgets() {
    this.map.updateChoropleth(this.data);
    this.statesListView.render();
    this.totalsView.calculate();
  }
}

export default Application;
