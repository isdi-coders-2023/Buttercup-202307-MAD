import { useCallback, useMemo, useReducer } from 'react';
import * as actions from '../reducers/cards.action.creators';
import { expansionReducer } from '../reducers/cards.reducer';
import { ApiExpansionRepository } from '../services/api.expansion.repository';

const urlBase = 'https://ringsdb.com/api/public/packs/';
export function useExpansions() {
  const expansionRepo = useMemo(() => new ApiExpansionRepository(urlBase), []);

  const [expansions, dispatch] = useReducer(expansionReducer, []);

  const loadExpansions = useCallback(async () => {
    try {
      const expansions = await expansionRepo.getAll();
      dispatch(actions.loadExpansionActionCreator(expansions));
    } catch (error) {
      console.error((error as Error).message);
    }
  }, [expansionRepo]);

  return {
    expansions,
    loadExpansions,
  };
}
