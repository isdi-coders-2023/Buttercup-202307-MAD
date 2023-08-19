import { Card } from '../model/card';
import { Expansion } from '../model/expansion';
import { CardAction, ExpansionAction } from './cards.action.creators';
import {
  actionTypeNames,
  actionTypeNamesExpansions,
} from './cards.action.types';

export type CardState = Card[] | undefined;
export type ExpansionState = Expansion[] | undefined;

export function cardsReducer(_state: CardState, action: CardAction): CardState {
  switch (action.type) {
    case actionTypeNames.load:
      return action.payload as Card[];
  }
}

export function expansionReducer(
  _state: ExpansionState,
  action: ExpansionAction
): ExpansionState {
  switch (action.type) {
    case actionTypeNamesExpansions.loadExpansion:
      return action.payload as Expansion[];
  }
}
