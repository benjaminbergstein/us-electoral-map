var Blue, Neutral, Red, PossibleFills;

Blue = '#ABDFFF';
Neutral = '#DADAD0';
Red = '#FF0000';

PossibleFills = {
  defaultFill: Neutral,
  1: Neutral,
  2: Blue,
  3: Red
};

window.application = new Application(window.presidentialElectionResults[2017]);
window.application.initialize();
