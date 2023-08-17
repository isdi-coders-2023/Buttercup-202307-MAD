import { Card } from '../model/card';
import { actionTypeNames } from './cards.action.types';
import { cardsReducer } from './cards.reducer';

test('should first', () => {
  const payloadMock = [{ id: 1 } as Card];
  const result = cardsReducer([], {
    type: actionTypeNames.load,
    payload: payloadMock,
  });

  expect(result).toEqual(payloadMock);
});
test('should first', () => {
  const payloadMock = { id: 1 } as Card;
  const result = cardsReducer([], {
    type: actionTypeNames.create,
    payload: payloadMock,
  });

  expect(result).toEqual(payloadMock);
});
test('should first', () => {
  const payloadMock = [{ id: 1 } as Card];
  const result = cardsReducer([], {
    type: actionTypeNames.update,
    payload: payloadMock,
  });

  expect(result).toEqual(payloadMock);
});
test('should first', () => {
  const payloadMock = [{ id: 1 } as Card];
  const result = cardsReducer([], {
    type: actionTypeNames.delete,
    payload: payloadMock,
  });

  expect(result).toEqual(payloadMock);
});
