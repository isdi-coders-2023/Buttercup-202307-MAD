import styles from './home.module.scss';
export default function Home() {
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
            src="https://www.somosjuegos.com/wp-content/uploads/2021/10/mec101es_1.jpg"
            alt="Caja de inicio"
            className={styles.imgOne}
          />
          <div className={styles.div}>
            <img
              src="https://www.somosjuegos.com/wp-content/uploads/2021/10/mec101es_3.jpg"
              alt="cartas de caja de inicio"
              className={styles.imgTwo}
            />
            <img
              src="https://www.somosjuegos.com/wp-content/uploads/2021/10/mec101es_2.jpg"
              alt="detalles de caja de inicio"
              className={styles.imgTwo}
            />
          </div>
        </article>
      </main>
    </>
  );
}
