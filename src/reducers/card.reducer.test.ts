import { Card } from '../model/card';
import { Expansion } from '../model/expansion';
import {
  actionTypeNames,
  actionTypeNamesExpansions,
} from './cards.action.types';
import { cardsReducer, expansionReducer } from './cards.reducer';

describe('Given the function cardsReducer', () => {
  describe('When it receives the action load', () => {
    test('The state should be  first the action payload', () => {
      const payloadMock = [{ id: 1 } as Card];
      const result = cardsReducer([], {
        type: actionTypeNames.load,
        payload: payloadMock,
      });
      expect(result).toEqual(payloadMock);
    });
  });
});

describe('Given the function expansionReducer', () => {
  describe('When it receives the action load', () => {
    test('The state should be  first the action payload', () => {
      const payloadMock = [{ id: 1 } as Expansion];
      const result = expansionReducer([], {
        type: actionTypeNamesExpansions.loadExpansion,
        payload: payloadMock,
      });
      expect(result).toEqual(payloadMock);
    });
  });
});
