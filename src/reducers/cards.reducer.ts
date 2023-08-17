import { Expansion } from '../model/expansion';
import { CardAction } from './cards.action.creators';
import { actionTypeNames } from './cards.action.types';

export type CardState = Expansion[];

export function cardsReducer(state: CardState, action: CardAction): CardState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Expansion[];
  }
}
