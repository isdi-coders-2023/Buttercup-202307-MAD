import { Card } from '../model/card';
import { Expansion } from '../model/expansion';
import {
  actionTypeNames,
  actionTypeNamesExpansions,
} from './cards.action.types';

type Keys = keyof typeof actionTypeNames;
type Keys2 = keyof typeof actionTypeNamesExpansions;

export type CardAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: Card[] | Card | number | string;
};

export type ExpansionAction = {
  type: (typeof actionTypeNamesExpansions)[Keys2];
  payload: Expansion[] | Expansion | number | string;
};

export const loadCardsActionCreator = (data: Card[]): CardAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const loadExpansionActionCreator = (
  data: Expansion[]
): ExpansionAction => {
  return {
    type: actionTypeNamesExpansions.loadExpansion,
    payload: data,
  };
};
