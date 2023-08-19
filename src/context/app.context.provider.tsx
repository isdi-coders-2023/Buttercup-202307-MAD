import { ReactNode } from 'react';
import { useCards } from '../hooks/use.cards';
import { useExpansions } from '../hooks/use.expansions';
import { AppContext, AppContextStructure } from './app.context';

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    cardsContext: useCards(),
    expansionContext: useExpansions(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
