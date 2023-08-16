import styles from './details.module.scss';
const charter = {
  pack_code: 'Core',
  pack_name: 'Core Set',
  type_code: 'hero',
  type_name: 'Hero',
  sphere_code: 'tactics',
  sphere_name: 'Tactics',
  position: 5,
  code: '01005',
  name: 'Legolas',
  traits: 'Noble. Silvan. Warrior.',
  text: 'Ranged.\r\n<b>Response:</b> After Legolas participates in an attack that destroys an enemy, place 2 progress tokens on the current quest.',
  flavor:
    '"I can walk this path, but others have not this skill."\r\n<cite>The Fellowship of the Ring</cite>',
  is_unique: true,
  threat: 9,
  willpower: 1,
  attack: 3,
  defense: 1,
  health: 4,
  quantity: 1,
  deck_limit: 1,
  illustrator: 'Magali Villeneuve',
  octgnid: '51223bd0-ffd1-11df-a976-0801200c9005',
  has_errata: false,
  url: 'https://ringsdb.com/card/01005',
  imagesrc: '/bundles/cards/01005.png',
};

export function Details() {
  return (
    <main className={styles.main}>
      <div className={styles.divOne}>
        <img
          src={`https://ringsdb.com/` + charter.imagesrc}
          alt="Card detail"
          className={styles.img}
        />
      </div>
      <div className={styles.divTwo}>
        <span className={styles.span}>
          Name: <span className={styles.innerSpan}>{charter.name}</span>
        </span>
        <span className={styles.span}>
          Type: <span className={styles.innerSpan}>{charter.type_name}</span>
        </span>
        <span className={styles.span}>
          Spehere:{' '}
          <span className={styles.innerSpan}>{charter.sphere_name}</span>
        </span>
        <span className={styles.span}>
          Traits: <span className={styles.innerSpan}>{charter.traits}</span>
        </span>
        <span className={styles.span}>
          Pack: <span className={styles.innerSpan}>{charter.pack_name}</span>
        </span>
      </div>
    </main>
  );
}
