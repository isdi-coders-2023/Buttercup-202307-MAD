import { useCallback, useMemo, useReducer } from 'react';
import * as actions from '../reducers/cards.action.creators';
import { cardsReducer } from '../reducers/cards.reducer';
import { ApiCardRepository } from '../services/api.card.repository';

const urlBase = 'https://ringsdb.com/';

export function useCards() {
  const cardRepo = useMemo(() => new ApiCardRepository(urlBase), []);

  const [cards, dispatch] = useReducer(cardsReducer, []);

  const loadCards = useCallback(async () => {
    try {
      const cards = await cardRepo.getAll();
      dispatch(actions.loadCardsActionCreator(cards));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [cardRepo]);
  return {
    cards,
    loadCards,
  };
}
