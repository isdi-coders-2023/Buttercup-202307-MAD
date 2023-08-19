import { createContext } from 'react';
import { useCards } from '../hooks/use.cards';
import { useExpansions } from '../hooks/use.expansions';

export type AppContextStructure = {
  cardsContext: ReturnType<typeof useCards>;
  expansionContext: ReturnType<typeof useExpansions>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
