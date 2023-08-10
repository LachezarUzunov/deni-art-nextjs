import Painting from '@/components/home-page/painting';
import classes from './index.module.css'
import PaintingWithModal from '@/components/paintings/paintingWithModal';
import { useContext } from 'react';
import LanguageContext from '@/store/language';
import { getAllPaintings } from '@/lib/paintings-util';

const PAINTINGS = [
    {
      key: "18",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Руу",
      enName: "Roo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: true,
      heading: "Пухкавини",
      enHeading: "Fluffiness",
      text: "Чувството предъвква компаса на безконечното време, докато чучулигата спи във  ветровитата прегръдка на кухината. Немирно мълчание обгражда гласовете на времето и прошепва за контрола на мечтата, загнездена в тайна атмосфера. Земята се издига в полет и отваря бездната на тишината като спокоен сън. Остават единствено пухкавите спомени на бъдещето.",
      enText: "The feeling chews the compass of the endless time as the lark sleeps in the windy embrace of the void. A tense silence surrounds the voices of time and whispers about the dream control nestled in a secret atmosphere. The earth rises in flight and frees the abyss of silence like a peaceful sleep. Only the fluffy memories of the future remain."
    },
    {
      key: "19",
      height: 40,
      width: 30,
      dimensions: "40 x 30",
      name: "Просто грозно",
      enName: "Just Ugly",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Целувката на Хор",
      enHeading: "The Kiss of Horus",
      text: "Очите на реалността глождят кокалите седемдневно и тревожно. Скелетът им замръзва в небиологична структура, затова че съхранил си одраскани писъци на нервни мумии с гневен околоочен контур. Омотаваш разлагането си като фараон на изгубено звездно царство, докато мъртвите синове на подутото от злато пясъчно слънце не залеят междузвездното скръбно пространство със своите мрачни и прелитащи премигвания. Тук е очакване. Тук е немирно витание. Тук на своето пристанище уплахата е изход от сиропиталището на един незнаен бог. Там страхът потъва, изгубва се в целувката на Хор и проглеждаш невидимо.",
      enText: "The eyes of existence crunch the bones sevendaylly and gingerly. Their skeleton freezes into a non-biological structure, thus preserving the scratchy screams of nervous mummies with a edgy eye contour. You wrap your decay like a pharaoh of a lost star kingdom, until the dead sons of the gold-swollen sandy sun flood the interstellar plaintive space with their somber and fleeting flashes. Here, it is an expectation. Here, it is a unrestful life. Here, at its port, fear is a way out of the orphanage of an unknown god. Where the horror descends, there is the lost kiss of Horus, so you ultimately see the unseen."
    },
    {
      key: "20",
      height: 80,
      width: 60,
      dimensions: "80 x 60",
      name: "Шаман",
      enName: "Shaman",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "Жадно чуващо око",
      enHeading: "Thirsty Hearing Eye",
      text: "Небосводът от слънчевото изригване съзира неочаквано докосване. Утринният поглед червенее. Cпуканите лъчи словото оголват. То боязливо в засмуканата от устни светлина упоено заспива, без ококорено да бди. Сияние в свят на предизвестени мъглявини вкопчва се и в първичен зов на небесни възгледи впримчва се премерено. Смразяващ водопад дълбоко удря виолетова зеница, тя бързо свива се, още по-обозримо замръзва и ледено-слънчево разперена в горящ сълзен сблъсък избухва студена и режеща. Отронените пепеляви звуци на вечерта облизват просмуканата тъмнина в прегръдка доближена. Нещо някъде, завинаги и никога прошепва: Кой намръщи вятъра в ушите? Кой потули жаждата небесна? Мръсните води като отровните вени на Смъртта вцепенено в очите спускат се, молекулните си огорчения съхнат: под душа, под облаците, под самото си обливане.",
      enText: "The solar-flare sky sees an unpredictable touch. The morning gaze is turning red. The cracked rays undress the word. It falls asleep restlessly and sedated in the light absorbed by the lips, without wide-eyed vigil. A glow clings in a world of foreboding nebulae, and in a primal call of heavenly views, it is measuredly imprisoned. A chilling waterfall deeply hits a violet pupil. It quickly shrinks, pierced even more visibly, and bursts out ice-sunny spread in a burning tearful collision - cold and cutting. The drenched ashen sounds of the evening lick the soaked darkness in a close embrace. Something somewhere, forever and never whispers: Who frowned the wind in the ears? Who quenched the heavenly thirst? The dirty waters, like the poisonous veins of Death, descend numbly in the eyes; their molecular bitterness dries up: under the shower, under the clouds, under its own dousing."
    },
    {
      key: "21",
      height: 24,
      width: 19,
      dimensions: "24 x 19",
      name: "Смотана мадама",
      enName: "Clumsy Chick",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "22",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Бременният плъх",
      enName: "The Pregnant Rat",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "23",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Непознато цвете",
      enName: "Unknown Flower",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "24",
      height: 80,
      width: 60,
      dimensions: "80 x 60",
      name: "Лейди Хамлет",
      enName: "Lady Hamlet",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "25",
      height: 80,
      width: 80,
      dimensions: "80 x 80",
      name: "Грозен феникс",
      enName: "Ugly Phoenix",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "26",
      height: 100,
      width: 70,
      dimensions: "100 x 70",
      name: "Метаморт",
      enName: "Metamort",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "27",
      height: 80,
      width: 60,
      dimensions: "80 x 60",
      name: "Жива илюзия",
      enName: "Living Illusion",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,   
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "28",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Преди възкресение",
      enName: "Before Resurrection",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
    {
      key: "29",
      height: 60,
      width: 40,
      dimensions: "60 x 40",
      name: "Денонощие",
      enName: "Around The Clock",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      sold: false,
      heading: "",
      enHeading: "",
      text: "",
      enText: ""
    },
  ];

export default function Paintings(props) {
  const paintings = props.paintings;
  const languageCtx = useContext(LanguageContext);
  const bulgarian = languageCtx.version;

  for (const painting of paintings) {
    const splitted = painting.content.split('enText:');
    const enText = splitted[1];
    const text = splitted[0];
    painting.text = text;
    painting.enText = enText;
  }
    
    return (
        <section className={classes.background}>
            <section className={classes.overlay}>
            <section className="container">
                {paintings.map(p => {
                    return (
                        <PaintingWithModal
                            key={p.key}
                            src={`/paintings/${p.name}.jpg`}
                            alt={p.name}
                            name={p.name}
                            enName={p.enName}
                            technique={p.technique}
                            enTechnique={p.enTechnique}
                            width={400 / (p.height / p.width)}
                            height={400}
                            dimensions={p.dimensions}
                            heading={p.heading}
                            enHeading={p.enHeading}
                            text={p.text}
                            enText={p.enText}
                            sold={p.sold}
                            bulgarian={bulgarian}
                        />
                  );
                })}
            </section>
            </section>
        </section>
    )
}

export function getStaticProps() {
  const paintings = getAllPaintings();

  return {
    props: {
      paintings
    }
  }
}