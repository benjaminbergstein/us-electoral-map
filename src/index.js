import Application from './application.js';
import RESULTS from './results/president';

window.application = new Application(RESULTS.Results2017);
window.application.initialize();
setTimeout(() => {
  window.application.initialize();
}, 300);
