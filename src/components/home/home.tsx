import { useContext, useEffect } from 'react';
import { AppContext } from '../../context/app.context';
import styles from './home.module.scss';
export default function Home() {
  const {
    cardsContext: { loadCards },
  } = useContext(AppContext);

  useEffect(() => {
    loadCards('');
  }, [loadCards]);

  return (
    <>
      <main className={styles.main}>
        <p className={styles.p}>
          In The Lord of the Rings: The Card Game, players assemble a band of
          adventurers who are trying to complete dangerous quests in
          Middle-earth. From the brilliant fields of the Shire and the
          treacherous paths of the Mirkwood Forest to the mighty realms of
          Gondor and Rohan, the heroes of this beloved land unite to resist the
          threat of the Dark Lord, Sauron.
        </p>
        <article className={styles.article}>
          <h2 className={styles.h2}>The Lord of the Rings: The Card Game</h2>
          <img
            src="../../assets/caja-base.jpg"
            alt="Caja de inicio"
            className={styles.imgOne}
          />
          <div className={styles.div}>
            <img
              src="../../assets/cartas-caja-base.jpg"
              alt="cartas de caja de inicio"
              className={styles.imgTwo}
            />
            <img
              src="../../assets/detalles-caja-base.jpg"
              alt="detalles de caja de inicio"
              className={styles.imgTwo}
            />
          </div>
        </article>
      </main>
    </>
  );
}
