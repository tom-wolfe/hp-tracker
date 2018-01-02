import { ConcentrationState } from './character/concentration/concentration.state';
import { HPState } from './character/hp/hp.state';

export interface CharacterState {
  name: string;
  concentration: ConcentrationState;
  hp: HPState;
}

export interface CharactersState {
  current: number;
  list: CharacterState[];
}
