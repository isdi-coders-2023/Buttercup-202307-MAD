import { useState } from 'react';
import styles from './menu.module.scss';
export function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMenu = () => {
    if (isOpen) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <nav>
        <div onClick={handleMenu}>
          <img src="./assets/menu.png" alt="" className={styles.img} />
        </div>
        <div className={isOpen ? styles.listContainer : styles.hidden}>
          <ul className={styles.ul}>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                Home
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                Cards
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                Create
              </a>
            </li>
            <li className={styles.li}>
              <a className={styles.a} href="#">
                Favourites
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
