import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import { CardNoId } from '../../model/card';
import { Card } from '../card/card';
import styles from './cards.module.scss';

export default function Cards() {
  const {
    expansionContext: { expansions, loadExpansions },
  } = useContext(AppContext);

  useEffect(() => {
    loadExpansions();
  }, [loadExpansions]);

  const {
    cardsContext: { cards, loadCards },
  } = useContext(AppContext);

  useEffect(() => {
    loadCards('TBR');
  }, [loadCards]);

  const expansionsFilter = expansions!.filter(
    (expansion) => expansion.known > 14
  );
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.navFilter}>
          <ol className={styles.ul}>
            {expansionsFilter.map((item) => (
              <li key={item.id}>
                <a href="">{`${item.name}`}</a>
              </li>
            ))}
          </ol>
        </nav>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trThead}>
              <th className={styles.name}>Name</th>
              <th className={styles.sphere}>Sphere</th>
              <th className={styles.type}>Type</th>
              <th className={`${styles.cost} ${styles.width1024}`}>Cost</th>
              <th className={`${styles.power} ${styles.width1024}`}>Power</th>
              <th className={`${styles.attack} ${styles.width1024}`}>Attack</th>
              <th className={`${styles.defense} ${styles.width1024}`}>
                Defense
              </th>
              <th className={`${styles.heath} ${styles.width1024}`}>Heath</th>
              <th className={`${styles.traits} ${styles.width1024}`}>Traits</th>
              <th className={styles.sets}>Sets</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {cards!.map((item: CardNoId) => (
              <Card key={item.position} item={item}></Card>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
