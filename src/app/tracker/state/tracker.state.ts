export interface TrackerState {
  hp: HPState;
}

export interface HPState {
  current: number;
  max: number;
}
