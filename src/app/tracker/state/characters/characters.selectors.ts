import { TrackerState } from '../tracker.state';

export const currentCharacter = (state: TrackerState) => {
  return state.characters.list[state.characters.current];
};
