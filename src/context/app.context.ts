import { createContext } from 'react';
import { useCards } from '../hooks/use.cards';

export type AppContextStructure = {
  cardsContext: ReturnType<typeof useCards>;
};

export const AppContext = createContext<AppContextStructure>(
  {} as AppContextStructure
);
