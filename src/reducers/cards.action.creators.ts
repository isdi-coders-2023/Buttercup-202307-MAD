import { Card } from '../model/card';
import { Expansion } from '../model/expansion';
import { actionTypeNames } from './cards.action.types';

type Keys = keyof typeof actionTypeNames;

export type CardAction = {
  type: (typeof actionTypeNames)[Keys];
  payload: Expansion[] | Expansion | Card[] | Card | number | string;
};

export const loadCardsActionCreator = (data: Card[]): CardAction => {
  return {
    type: actionTypeNames.load,
    payload: data,
  };
};

export const createCardActionCreator = (data: Card): CardAction => {
  return {
    type: actionTypeNames.create,
    payload: data,
  };
};

export const updateCardActionCreator = (data: Card): CardAction => {
  return {
    type: actionTypeNames.update,
    payload: data,
  };
};

export const deleteCardActionCreator = (data: Card['id']): CardAction => {
  return {
    type: actionTypeNames.delete,
    payload: data,
  };
};
