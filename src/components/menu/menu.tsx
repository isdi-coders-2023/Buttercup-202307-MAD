import styles from './menu.module.scss';
export function Menu() {
  return (
    <>
      <div>
        <a href="#" className={styles.a}>
          <img src="./assets/menu (1).png" alt="" className={styles.img} />
        </a>
        <div>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#"> Cards</a>
            </li>
            <li>
              <a href="#">Create</a>
            </li>
            <li>
              <a href="#">Favourites</a>
            </li>
          </ul>
        </div>
      </div>
      <nav> </nav>
    </>
  );
}
