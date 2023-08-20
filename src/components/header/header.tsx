import { Menu } from '../menu/menu';
import styles from './header.module.scss';

export function Header() {
  return (
    <header className={styles.header}>
      <img
        src="../../../assets/the-ring.svg"
        alt="El anillo unico"
        className={styles.img}
      />
      <hgroup className={styles.hgroup}>
        <h1 className={styles.headerH1}>The Lord of the Rings</h1>
        <p className={styles.headerP}>The card Game</p>
      </hgroup>
      <Menu></Menu>
    </header>
  );
}
