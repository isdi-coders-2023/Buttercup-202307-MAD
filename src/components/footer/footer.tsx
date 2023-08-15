import styles from './footer.module.scss';
export function Footer() {
  return (
    <footer className={styles.footer}>
      <address className={styles.address}>TheLordOfTheRings</address>
      <div className={styles.div}>
        <a
          href="https://www.vidaextra.com/estrategia/the-lord-of-the-rings-adventure-card-game-como-acabe-jugando-a-cartas-sauron"
          className={styles.a}
        >
          <img
            src="../../assets/favicon.png"
            alt="ring"
            className={styles.img}
          />
        </a>
        <a
          href="https://www.instagram.com/lordoftherings_official/?hl=es"
          className={styles.a}
        >
          <img
            src="../../assets/instagram.svg"
            alt="instagram"
            className={styles.img}
          />
        </a>
        <a href="https://twitter.com/lotronprime?lang=es" className={styles.a}>
          <img
            src="../../assets/twitter.svg"
            alt="twitter"
            className={styles.img}
          />
        </a>
      </div>
    </footer>
  );
}
