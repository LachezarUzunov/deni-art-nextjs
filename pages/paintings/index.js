import Painting from '@/components/home-page/painting';
import classes from './index.module.css'
import PaintingWithModal from '@/components/paintings/paintingWithModal';
import { useContext } from 'react';
import LanguageContext from '@/store/language';
import { getAllPaintings } from '@/lib/paintings-util';

const PAINTINGS = [

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