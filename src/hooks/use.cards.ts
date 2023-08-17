import { useCallback, useMemo, useReducer } from 'react';
import * as actions from '../reducers/cards.action.creators';
import { cardsReducer } from '../reducers/cards.reducer';
import { ApiCardRepository } from '../services/api.TheLordOfTheRings.repository';

const urlBase = 'https://ringsdb.com/api/public/packs/';

export function useCards() {
  const repo = useMemo(() => new ApiCardRepository(urlBase), []);

  const [cards, dispatch] = useReducer(cardsReducer, []);

  const loadCards = useCallback(async () => {
    try {
      const cards = await repo.getAll();
      dispatch(actions.loadCardsActionCreator(cards));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [repo]);

  return {
    cards,
    loadCards,
  };
}
