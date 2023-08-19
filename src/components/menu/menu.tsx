import { useState } from 'react';
import { Link } from 'react-router-dom';
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
              <Link className={styles.a} to={'/home'}>
                Home
              </Link>
            </li>
            <li className={styles.li}>
              <Link className={styles.a} to={'/cards'}>
                Cards
              </Link>
            </li>
            <li className={styles.li}>
              <Link className={styles.a} to={'/create'}>
                Create
              </Link>
            </li>
            <li className={styles.li}>
              <Link className={styles.a} to={'/error'}>
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
