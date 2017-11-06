export interface TrackerState {
  hp: HPState;
}

export interface HPState {
  currentHp: number;
  maxHp: number;
  tempHp: number;
  tempMaxHp: number;
}
