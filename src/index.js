import Application from './application.js';
import RESULTS from './results/president/2017.json';

window.application = new Application(RESULTS);
window.application.initialize();
setTimeout(() => {
  window.application.initialize();
}, 300);
