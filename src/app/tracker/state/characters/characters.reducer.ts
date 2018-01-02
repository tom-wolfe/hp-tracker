import { Action } from '../../../state';
import { characterReducer } from './character';
import * as CharactersActions from './characters.actions';
import { CharactersState, CharacterState } from './characters.state';

export const initialState: CharactersState = {
  current: 0,
  list: []
};

export function charactersReducer(state: CharactersState = initialState, action: CharactersActions.Action): CharactersState {
  switch (action.type) {
    case CharactersActions.ADD_CHARACTER: {
      const current = state.list.length;
      const newCharacter: CharacterState = {
        name: '', // Gets randomized by the meta reducer.
        concentration: { saveDC: 0, concentrating: false },
        hp: {
          current: 10,
          max: 10,
          temp: 0,
          tempMax: 0
        }
      };
      return Object.assign({}, state, { list: [...state.list, newCharacter], current });
    }
    case CharactersActions.REMOVE_CHARACTER: {
      const list = state.list.filter((c, i) => i !== action.id);
      return Object.assign({}, state, { list, current: 0 });
    }
    case CharactersActions.SET_CHARACTER: {
      return Object.assign({}, state, { current: action.id });
    }
    default: {
      const list = state.list.map((c, i) => i === state.current ? characterReducer(c, action) : c);
      return Object.assign({}, state, { list });
    }
  }
}
