import { ConcentrationState } from './concentration/concentration.state';
import { HPState } from './hp/hp.state';

export interface CharacterState {
  name: string;
  concentration: ConcentrationState;
  hp: HPState;
}
