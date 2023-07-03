import Painting from '@/components/paintings/painting';
import classes from './index.module.css'

const PAINTINGS = [
    {
      key: "1",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Вселена 47",
      enName: "Universe 47",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
      text: "Между пелените и първообраза Младостта трудно се отмива. В пояса й са потънали ветрове, в неотменната и съвършена песен на новородените -  никаква утеха, но как спокойно цъфтят кухите й очи в люспестите пети на вечността и белее облак тлъст, отлъчен от бялото и изтънял. Една капка кръв и атомите носят коварна нежност, поднесена на луди сблъсъци. Съвършенството завързало любовния плод със сбръчканата и изсмукана кухина на ласка, запокитило го извън ембриона, където някога било като вълна от сянка с лъскави хриле. Толкова малко плът имало, че видяло как по-навътре слънцето черноокия ужас обрулило, съвместило го с лице, леко като разкървавена капсула  на небесно, безволно подгизнало закрепена. Отпускали се откосите сълзи, просторно заспали, измамно вплетени. Или това бил дяволът само със захапаната си усмивка на грохот бездомно кух?"
    },
    {
      key: "2",
      height: 60,
      width: 45,
      dimensions: "60 на 45",
      enDimensions: "60 to 45",
      name: "Роза от Вселена 47",
      enName: "Rose From Universe 47",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "3",
      height: 100,
      width: 70,
      dimensions: "100 на 70",
      enDimensions: "100 to 70",
      name: "Космически рози",
      enName: "Space Roses",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "4",
      height: 30,
      width: 20,
      dimensions: "30 на 20",
      enDimensions: "30 to 20",
      name: "РоЗЗи",
      enName: "Rozzes",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "5",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Краличка",
      enName: "Little Queen",
      technique: "акрил, смесена техника, тиксо",
      enTechnique: "acrylic, mixed media, duct tape",
      продадена: false,
      sold: false
    },
    {
      key: "6",
      height: 25,
      width: 18,
      dimensions: "25 на 18",
      enDimensions: "25 to 18",
      name: "Течна роза",
      enName: "Liquid Rose",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "7",
      height: 80,
      width: 30,
      dimensions: "80 на 30",
      enDimensions: "80 to 30",
      name: "Роза",
      enName: "Rose",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "8",
      height: 80,
      width: 30,
      dimensions: "80 на 30",
      enDimensions: "80 to 30",
      name: "Другите рози",
      enName: "Other Roses",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "9",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Бонбонени рози",
      enName: "Candy Roses",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "10",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Басмая",
      enName: "Basmaya",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "11",
      height: 100,
      width: 70,
      dimensions: "100 на 70",
      enDimensions: "100 to 70",
      name: "Мъртво извънземно",
      enName: "Dead Alien",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "12",
      height: 80,
      width: 80,
      dimensions: "80 на 80",
      enDimensions: "80 to 80",
      name: "Нигредо",
      enName: "Nigredo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "13",
      height: 50,
      width: 35,
      dimensions: "50 на 35",
      enDimensions: "50 to 35",
      name: "Мъртъв пламък",
      enName: "Dead Flame",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "14",
      height: 30,
      width: 20,
      dimensions: "30 на 20",
      enDimensions: "30 to 20",
      name: "БъбБъб",
      enName: "BubBub",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "15",
      height: 60,
      width: 45,
      dimensions: "60 на 45",
      enDimensions: "60 to 45",
      name: "Арсел",
      enName: "Arsel",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "16",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Горгона",
      enName: "Gorgona",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "17",
      height: 50,
      width: 35,
      dimensions: "50 на 35",
      enDimensions: "50 to 35",
      name: "Турбо",
      enName: "Turbo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "18",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Руу",
      enName: "Roo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: true,
      sold: true
    },
    {
      key: "19",
      height: 40,
      width: 30,
      dimensions: "40 на 30",
      enDimensions: "40 to 30",
      name: "Просто грозно",
      enName: "Just Ugly",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "20",
      height: 80,
      width: 60,
      dimensions: "80 на 60",
      enDimensions: "80 to 60",
      name: "Шаман",
      enName: "Shaman",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "21",
      height: 24,
      width: 19,
      dimensions: "24 на 19",
      enDimensions: "24 to 19",
      name: "Смотана мадама",
      enName: "Clumsy Chick",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "22",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Бременният плъх",
      enName: "The Pregnant Rat",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "23",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      enDimensions: "60 to 40",
      name: "Непознато цвете",
      enName: "Unknown Flower",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "24",
      height: 80,
      width: 60,
      dimensions: "80 на 60",
      enDimensions: "80 to 60",
      name: "Лейди Хамлет",
      enName: "Lady Hamlet",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "25",
      height: 80,
      width: 80,
      dimensions: "80 на 80",
      enDimensions: "80 to 80",
      name: "Грозен феникс",
      enName: "Ugly Phoenix",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "26",
      height: 100,
      width: 70,
      dimensions: "100 на 70",
      enDimensions: "100 to 70",
      name: "Метаморт",
      enName: "Metamort",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
    {
      key: "27",
      height: 80,
      width: 60,
      dimensions: "80 на 60",
      enDimensions: "80 to 60",
      name: "Жива илюзия",
      enName: "Living Illusion",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false
    },
  ];

export default function Paintings() {

    return (
        <section className={classes.background}>
            <section className={classes.overlay}>
            <section className="container">
                {PAINTINGS.map(p => {
                    return (
                        <Painting
                            key={p.key}
                            src={`/paintings/${p.name}.jpg`}
                            alt={p.name}
                            technique={p.technique}
                            width={400 / (p.height / p.width)}
                            height={400}
                            dimensions={p.dimensions}
                            text={p.text}
                        />
                  );
                })}
            </section>
            </section>
            
        </section>
    )
}