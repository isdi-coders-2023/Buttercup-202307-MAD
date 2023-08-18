import { Link } from 'react-router-dom';
import { CardNoId } from '../../model/card';
import styles from './card.module.scss';

type Props = {
  item: CardNoId;
};
export function Card({ item }: Props) {
  return (
    <>
      <tr className={styles.trBody}>
        <th className={styles.name}>
          <Link to={`/card/${item.octgnid}`}>{item.name}</Link>
        </th>
        <th className={styles.sphere}>{item.sphere_name}</th>
        <th className={styles.type}>{item.type_name}</th>
        <th className={`${styles.cost} ${styles.width1024}`}>{item.cost}</th>
        <th className={`${styles.willpower} ${styles.width1024}`}>
          {item.willpower}
        </th>
        <th className={`${styles.attack} ${styles.width1024}`}>
          {item.attack}
        </th>
        <th className={`${styles.defense} ${styles.width1024}`}>
          {item.defense}
        </th>
        <th className={`${styles.health} ${styles.width1024}`}>
          {item.health}
        </th>
        <th className={`${styles.threat} ${styles.width1024}`}>
          {item.threat}
        </th>
        <th className={styles.sets}>{item.pack_name}</th>
      </tr>
    </>
  );
}
