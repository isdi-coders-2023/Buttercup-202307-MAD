import { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from '../../context/app.context';
import styles from './details.module.scss';

export default function Details() {
  const characterId = useParams();
  const {
    cardsContext: { cards },
  } = useContext(AppContext);
  const character = cards?.filter((card) => card.octgnid === characterId.id);

  return (
    <main className={styles.main}>
      <div className={styles.divOne}>
        <img
          src={`https://ringsdb.com/` + character?.[0]?.imagesrc}
          alt="Card detail"
          className={styles.img}
        />
      </div>
      <div className={styles.divTwo}>
        <span className={styles.span}>
          Name: <span className={styles.innerSpan}>{character?.[0]?.name}</span>
        </span>
        <span className={styles.span}>
          Type:{' '}
          <span className={styles.innerSpan}>{character?.[0]?.type_name}</span>
        </span>
        <span className={styles.span}>
          Spehere:{' '}
          <span className={styles.innerSpan}>
            {character?.[0]?.sphere_name}
          </span>
        </span>
        <span className={styles.span}>
          Traits:{' '}
          <span className={styles.innerSpan}>{character?.[0]?.traits}</span>
        </span>
        <span className={styles.span}>
          Pack:{' '}
          <span className={styles.innerSpan}>{character?.[0]?.pack_name}</span>
        </span>
      </div>
    </main>
  );
}
