import { HPState } from './hp/hp.state';

export interface CharacterState {
  name: string;
  concentrating: boolean;
  hp: HPState;
}
