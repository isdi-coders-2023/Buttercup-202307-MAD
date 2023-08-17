import { ReactNode } from 'react';
import { useCards } from '../hooks/use.cards';
import { AppContext, AppContextStructure } from './app.context';

type Props = {
  children: ReactNode;
};
export function AppContextProvider({ children }: Props) {
  const context: AppContextStructure = {
    cardsContext: useCards(),
  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
}
