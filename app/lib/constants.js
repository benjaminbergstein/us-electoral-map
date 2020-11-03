const Blue = 'cornflowerblue';
const Neutral = 'lightslategray';
const Red = 'indianred';

const Maps = [
  "2020 Battlegrounds",
  "2020 - Possible EC Tie",
  "2020 - My Prediction",
  "2016 Trump v Clinton",
  "2012 Obama v Romney",
  "2008 Obama v McCain",
]

const DefaultMap = Maps[0]

const PossibleFills = {
  defaultFill: Neutral,
  1: Neutral,
  2: Blue,
  3: Red,
};

const partyColors = {
  dems: Blue,
  neutral: Neutral,
  GOP: Red,
};

export { DefaultMap, Maps, Blue, Neutral, Red, PossibleFills, partyColors };
