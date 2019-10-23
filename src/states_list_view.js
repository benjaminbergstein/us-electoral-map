import StateView from './state_view';

class StatesListView {
  constructor(application) {
    this.application = application;
    this.element = statesList;
    this.render = this.render.bind(this);
  }

  render() {
    const { application, element } = this;
    const { helper } = application;

    element.innerHTML = '';

    Object.entries(application.data).forEach(([stateName]) => {
      const stateView = new StateView(application, stateName);
      stateView.render();
    });
  }
};

export default StatesListView;
