import styles from './menu.module.scss';
export function Menu() {
  const displayMenu = () => {};
  return (
    <>
      <nav className={styles.nav}>
        <a href="#" className={styles.a}>
          <img src="./assets/menu (1).png" alt="" className={styles.img} />
        </a>
        <div onClick={displayMenu} className={styles.listContainer}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a href="#">Home</a>
            </li>
            <li className={styles.li}>
              <a href="#"> Cards</a>
            </li>
            <li className={styles.li}>
              <a href="#">Create</a>
            </li>
            <li className={styles.li}>
              <a href="#">Favourites</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
