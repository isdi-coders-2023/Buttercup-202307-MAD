import { useContext, useEffect, useState } from 'react';
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

  const expansionsFilter = expansions!.filter(
    (expansion) => expansion.known > 14
  );

  const [currentPage, setCurrentPage] = useState(1);

  const pageSize = 25;
  const pageCount = Math.ceil(cards!.length / pageSize);
  let paginatedData = cards!.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize
  );

  const handleNextPage = () => {
    if (currentPage < pageCount) {
      setCurrentPage(currentPage + 1);
      paginatedData = [];
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      paginatedData = [];
    }
  };

  return (
    <>
      <main className={styles.main}>
        <nav className={styles.navFilter}>
          <select
            className={styles.ul}
            defaultValue={''}
            onChange={(event) => {
              loadCards(event.target.value), setCurrentPage(1);
            }}
          >
            <option value="" disabled>
              SELECT AN EXPANSION
            </option>
            <option value="">View All Expansion</option>
            {expansionsFilter.map((item) => (
              <option value={item.code + '.json'} key={item.id}>
                {`${item.name}`}
              </option>
            ))}
          </select>
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
            {paginatedData.map((item: CardNoId) => (
              <Card key={item.octgnid + item.code} item={item}></Card>
            ))}
          </tbody>
        </table>
        <div className={styles.buttonDiv}>
          <button
            role="previousButton"
            className={styles.previousButton}
            onClick={handlePreviousPage}
          >
            Previous
          </button>
          <button
            role="nextButton"
            className={styles.nextButton}
            onClick={handleNextPage}
          >
            Next
          </button>
        </div>
        <span>
          {currentPage}/{pageCount}
        </span>
      </main>
    </>
  );
}
