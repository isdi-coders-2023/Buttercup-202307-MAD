import styles from './error.module.scss';
export function ErrorPage() {
  return (
    <main className={styles.error}>
      <span className={styles.text}>Error 404</span>
      <img src="../../assets/favicon.png" alt="ring" className={styles.img} />
      <span className={styles.text}>Anillo not found</span>
      <a href="/.home" className={styles.a}>
        HOME
      </a>
    </main>
  );
}
