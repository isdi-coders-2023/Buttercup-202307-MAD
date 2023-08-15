import { CardNoId } from '../../model/card';
import { Card } from '../card/card';
import styles from './cards.module.scss';

const mockStateOne = [
  {
    pack_code: 'Core',
    pack_name: 'Core Set',
    type_code: 'hero',
    type_name: 'Hero',
    sphere_code: 'leadership',
    sphere_name: 'Leadership',
    position: 1,
    code: '01001',
    name: 'Aragorn',
    traits: 'Dúnedain. Noble. Ranger.',
    text: 'Sentinel.\n<b>Response:</b> After Aragorn commits to a quest, spend 1 resource from his resource pool to ready him.',
    flavor:
      '"I am Aragorn son of Arathorn; and if by life or death I can save you, I will."\n<cite>The Fellowship of the Ring</cite>',
    is_unique: true,
    threat: 12,
    willpower: 2,
    attack: 3,
    defense: 2,
    health: 5,
    quantity: 1,
    deck_limit: 1,
    illustrator: 'John Stanko',
    octgnid: '51223bd0-ffd1-11df-a976-0801200c9001',
    has_errata: false,
    url: 'https://ringsdb.com/card/01001',
    imagesrc: '/bundles/cards/01001.png',
  },
  {
    pack_code: 'Core',
    pack_name: 'Core Set',
    type_code: 'hero',
    type_name: 'Hero',
    sphere_code: 'leadership',
    sphere_name: 'Leadership',
    position: 2,
    code: '01002',
    name: 'Théodred',
    traits: 'Noble. Rohan. Warrior.',
    text: "<b>Response:</b> After Théodred commits to a quest, choose a hero committed to that quest. Add 1 resource to that hero's resource pool.",
    flavor:
      '"Not all is dark. Take courage, Lord of the Mark..."\n<cite>Gandalf, The Two Towers</cite>',
    is_unique: true,
    threat: 8,
    willpower: 1,
    attack: 2,
    defense: 1,
    health: 4,
    quantity: 1,
    deck_limit: 1,
    illustrator: 'Jeff Himmelman',
    octgnid: '51223bd0-ffd1-11df-a976-0801200c9002',
    has_errata: false,
    url: 'https://ringsdb.com/card/01002',
    imagesrc: '/bundles/cards/01002.png',
  },
  {
    pack_code: 'Core',
    pack_name: 'Core Set',
    type_code: 'hero',
    type_name: 'Hero',
    sphere_code: 'leadership',
    sphere_name: 'Leadership',
    position: 3,
    code: '01003',
    name: 'Glóin',
    traits: 'Dwarf. Noble.',
    text: '<b>Response:</b> After Glóin suffers damage, add 1 resource to his resource pool for each point of damage he just suffered.',
    flavor:
      'His beard, very long and forked, was white, nearly as white as the snow-white cloth of his garments.\n<cite>The Fellowship of the Ring</cite>',
    is_unique: true,
    threat: 9,
    willpower: 2,
    attack: 2,
    defense: 1,
    health: 4,
    quantity: 1,
    deck_limit: 1,
    illustrator: 'Tom Garden',
    octgnid: '51223bd0-ffd1-11df-a976-0801200c9003',
    has_errata: false,
    url: 'https://ringsdb.com/card/01003',
    imagesrc: '/bundles/cards/01003.png',
  },
];

export function Cards() {
  if (window.innerWidth > 1023) {
    return (
      <>
        <main className={styles.main}>
          <nav className={styles.navFilter}>
            <ul className={styles.ul}></ul>
          </nav>
          <table className={styles.table}>
            <thead className={styles.thead}>
              <tr className={styles.trThead}>
                <th className={styles.name}>Name</th>
                <th className={styles.sphere}>Sphere</th>
                <th className={styles.type}>Type</th>
                <th className={styles.cost}>Cost</th>
                <th className={styles.power}>Power</th>
                <th className={styles.attack}>Attack</th>
                <th className={styles.defense}>Defense</th>
                <th className={styles.heath}>Heath</th>
                <th className={styles.traits}>Traits</th>
                <th className={styles.sets}>Sets</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              {mockStateOne.map((item: CardNoId) => (
                <Card key={item.position} item={item}></Card>
              ))}
            </tbody>
          </table>
        </main>
      </>
    );
  }
  return (
    <>
      <main className={styles.main}>
        <nav className={styles.navFilter}>
          <ul className={styles.ul}></ul>
        </nav>
        <table className={styles.table}>
          <thead className={styles.thead}>
            <tr className={styles.trThead}>
              <th className={styles.name}>Name</th>
              <th className={styles.sphere}>Sphere</th>
              <th className={styles.type}>Type</th>
              <th className={styles.sets}>Sets</th>
            </tr>
          </thead>
          <tbody className={styles.tableBody}>
            {mockStateOne.map((item: CardNoId) => (
              <Card item={item}></Card>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}
