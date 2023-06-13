import Painting from '@/components/paintings/painting';
import classes from './index.module.css'

const PAINTINGS = [
    {
      key: "1",
      height: 60,
      width: 40,
      dimensions: "60 на 40",
      name: "Вселена 47",
      technique: "акрил, смесена техника",
      text: "Между пелените и първообраза Младостта трудно се отмива. В пояса й са потънали ветрове, в неотменната и съвършена песен на новородените -  никаква утеха, но как спокойно цъфтят кухите й очи в люспестите пети на вечността и белее облак тлъст, отлъчен от бялото и изтънял. Една капка кръв и атомите носят коварна нежност, поднесена на луди сблъсъци. Съвършенството завързало любовния плод със сбръчканата и изсмукана кухина на ласка, запокитило го извън ембриона, където някога било като вълна от сянка с лъскави хриле. Толкова малко плът имало, че видяло как по-навътре слънцето черноокия ужас обрулило, съвместило го с лице, леко като разкървавена капсула  на небесно, безволно подгизнало закрепена. Отпускали се откосите сълзи, просторно заспали, измамно вплетени. Или това бил дяволът само със захапаната си усмивка на грохот бездомно кух?"
    },
    {
      key: "2",
      height: 60,
      width: 45,
      dimensions: "60 на 45",
      name: "Роза от Вселена 47",
      technique: "акрил, смесена техника",
    },
    {
      key: "3",
      height: 100,
      width: 70,
      dimensions: "100 на 70",
      name: "Космически рози",
      technique: "акрил, смесена техника",
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