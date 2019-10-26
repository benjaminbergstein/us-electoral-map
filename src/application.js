import Datamap from "datamaps/dist/datamaps.usa.js";
import debounce from 'debounce';
import StatesListView from './states_list_view';
import StateView from './state_view';
import TotalsView from './totals_view';
import { PossibleFills } from './constants';

const POPUP_TEMPLATE = (state, data) => `<span style="color: white; font-weight: 900; text-shadow: 0 0 1px #000, 1px 1px 1px #000;">${state.properties.name}: ${data['Electoral Votes']}</span>`;

class Application {
  constructor(data) {
    this.application = this;
    this.data = data;
    this.totalsView = new TotalsView(this);
    this.initialize = this.initialize.bind(this);
    this.renderMap = this.renderMap.bind(this);
    this.updateAllWidgets = this.updateAllWidgets.bind(this);
  }

  initialize() {
    this.statesListView = new StatesListView(this);
    container.innerHTML = '';
    this.renderMap();
    this.updateAllWidgets();
    window.addEventListener('resize', debounce(function() {
      application.initialize();
    }));
  }

  renderMap() {
    this.map = new Datamap({
      element: container,
      scope: 'usa',
      data: this.data,
      fills: PossibleFills,
      geographyConfig: {
        highlightOnHover: false,
        popupTemplate: POPUP_TEMPLATE,
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
