const Blue = 'cornflowerblue';
const Neutral = 'lightslategray';
const Red = 'indianred';
const MissedRed = 'mediumvioletred'
const MissedBlue = 'royalblue'

const Maps = [
  "2020 Biden v Trump",
  "2020 - My Prediction",
  "2016 Trump v Clinton",
  "2012 Romney v Obama",
  "2008 Obama v McCain",
  "National Popular Vote Interstate Compact",
]

const DefaultMap = Maps[0]

const PossibleFills = {
  defaultFill: Neutral,
  1: Neutral,
  2: Blue,
  3: Red,
  4: MissedRed,
  5: MissedBlue,
};

const partyColors = {
  dems: Blue,
  neutral: Neutral,
  GOP: Red,
};

export { DefaultMap, Maps, Blue, Neutral, Red, PossibleFills, partyColors };
