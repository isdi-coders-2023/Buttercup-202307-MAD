import { CardNoId } from '../../model/card';
import styles from './card.module.scss';

type Props = {
  item: CardNoId;
};
export function Card({ item }: Props) {
  if (window.innerWidth > 1023) {
    return (
      <>
        <tr className={styles.trBody}>
          <th className={styles.name}>
            <a href="">{item.name}</a>
          </th>
          <th className={styles.sphere}>{item.sphere_name}</th>
          <th className={styles.type}>{item.type_name}</th>
          <th className={styles.cost}>{item.cost}</th>
          <th className={styles.power}>{item.willpower}</th>
          <th className={styles.attack}>{item.attack}</th>
          <th className={styles.defense}>{item.defense}</th>
          <th className={styles.heath}>{item.health}</th>
          <th className={styles.traits}>{item.threat}</th>
          <th className={styles.sets}>{item.pack_name}</th>
        </tr>
      </>
    );
  }
  return (
    <>
      <tr className={styles.trBody}>
        <th className={styles.name}>
          <a href="">{item.name}</a>
        </th>
        <th className={styles.sphere}>{item.sphere_name}</th>
        <th className={styles.type}>{item.type_name}</th>
        <th className={styles.sets}>{item.pack_name}</th>
      </tr>
    </>
  );
}
