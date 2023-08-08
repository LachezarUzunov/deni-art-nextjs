import classes from "./latest-work.module.css";
import Painting from "./painting";

const PAINTINGS = [
  {
    key: "1",
    height: 60,
    width: 40,
    dimensions: "60 x 40",
    name: "Вселена 47",
    enName: "Universe 47",
    technique: "акрил, смесена техника",
    enTechnique: "acrylic, mixed media",
    title: "Аборт",
    text: "Между пелените и първообраза Младостта трудно се отмива. В пояса й са потънали ветрове, в неотменната и съвършена песен на новородените -  никаква утеха, но как спокойно цъфтят кухите й очи в люспестите пети на вечността и белее облак тлъст, отлъчен от бялото и изтънял. Една капка кръв и атомите носят коварна нежност, поднесена на луди сблъсъци. Съвършенството завързало любовния плод със сбръчканата и изсмукана кухина на ласка, запокитило го извън ембриона, където някога било като вълна от сянка с лъскави хриле. Толкова малко плът имало, че видяло как по-навътре слънцето черноокия ужас обрулило, съвместило го с лице, леко като разкървавена капсула  на небесно, безволно подгизнало закрепена. Отпускали се откосите сълзи, просторно заспали, измамно вплетени. Или това бил дяволът само със захапаната си усмивка на грохот бездомно кух?",
    enTitle: 'Abortion',
    enText: "Between the diapers and the prototype, Youth is hard to wash away. Winds have sunk into its belt, in the indelible and pure song of the new-born - no comfort at all, but how calmly the hollow eyes are blooming in the scaly heels of eternity, and fat cloud pales whited and thinned. A falling blood drop and the atoms begin to carry a shifty tenderness served up to inflamed clashes. The perfection that bound the love egg to the dusty and sucked cavity of a weasel swept it out of the embryo, where it had once been like a shadow wave of shiny gills. There was so little flesh that it saw how further inward the sun enveloped the black-eyed horror, combined it with a face, light as a bleeding capsule of heaven, willy-nilly drenched and fixed. The poor tears fell, spaciously asleep, deceptively intertwined. Or was it just the devil with his biting smile like a rumbling homeless hollow?"
  },
  {
    key: "2",
    height: 60,
    width: 45,
    dimensions: "60 x 45",
    name: "Роза от Вселена 47",
    enName: "Rose from Universe 47",
    technique: "акрил, смесена техника",
    enTechnique: "acrylic, mixed media",
    title: "Душа-копнение",
    text: "Ако светът, който изричаш, не е този, който споделяш, а принадлежи на чужди и понякога на свои герои, то той бавноносно в подводната пустош на словесните сенки на други хора ще потъва. Светът в предела ще се сгуши с неовладени, престарели капчици на сърцето, непознато, дърпащо връвта на контра-живота, където наводнени бели лъчи разплискат отдръпващата се красота.",
    enTitle: "Soul-longing",
    enText: "If the world you speak is not the world you share, but it belongs to other people and sometimes to your own heroes, then it will slowly sink into the underwater wasteland of other people's unwritten shadows. The limit of the world will nestle with untamed, aged drops of the foreign heart pulling the string of counter-life, where flooded white beams splash the retreating beauty."
  },
  {
    key: "3",
    height: 100,
    width: 70,
    dimensions: "100 x 70",
    name: "Космически рози",
    enName: "Space Roses",
    technique: "акрил, смесена техника",
    enTechnique: "acrylic, mixed media",
    title: "Земя",
    text: "Ще изкормя Вселената, докато кухините на мислите ти не се подчинят на моя Бог. Той ще бъде сух хаос от разпилени любовни дни. Ще лежи в денонощието като лунно отражение в най-светлия ти спомен, който ще ми бъде досаден като самия теб. Забравям все по-бавно скоростта на светлината и баналния космос, на който ме научи праволинейното чувство от смъртоотворената ти душевна дупка. Никога няма да те изровя. Раната ти ще зее от земята.",
    enTitle: "Ground",
    enText: "I will disembowel the universe until the hollows of your thoughts submit to my God. He will be a dry chaos of wasted love days. He will rest in the day like a lunar reflection of your brightest memory, which will be as annoying to me as you. I'm slowly forgetting the speed of light and the banal cosmos that the rectilinear feeling of your death-opened soul-hole taught me. I'll never dig you up. Your wound will yawn from the ground."
  },
  {
    key: "4",
    height: 30,
    width: 20,
    dimensions: "30 x 20",
    name: "РоЗЗи",
    enName: "RoZZes",
    technique: "акрил, смесена техника",
    enTechnique: "acrylic, mixed media",
    title: "НЕНАЗОВИМОТО",
    text: "Сгушена в душата съдбата име просъсква. Стои бездиханна на прага на отчаяние смирено, безсловесно и чака небесния взор покорно - опитомено, сломено. Сгушена в душата, съдбата име просъсква и пита небесата подземни, къде е краят, щом неназовимото мъртво живее, а в рая все още ридаят, тези, които в димен брътвеж ада дояждат.",
    enTitle: "UNNAMABLE",
    enText: "Cuddled  in the soul, fatefulness hisses a name. It stands breathless at the threshold of despair humbly, speechlessly, and it waits for the heavenly gaze tamely, brokenly. Cuddled in the soul, fatefulness hisses a name, and it asks the heavens below, where is the end if the unnameable lives deadly, and in heaven they still weep, those who are eating up hell in a smoky chattering chaos."
  },
];

const LatestWork = ({ bulgarian }) => {
  
  return (
    <section className={classes.background}>
      <section className="container">
        <div className={classes.painting__header}>
          <h2>{ bulgarian ? 'Последни творби' : 'Latest Works'}</h2>
          <h3>{ bulgarian ? 'Върху какво работя напоследък' : 'What I am working on lately'}</h3>
        </div>
        <article className={classes.painting}>
          {PAINTINGS.map((p) => {
            return (
              <Painting
                key={p.key}
                src={`/paintings/${p.name}.jpg`}
                alt={p.name}
                name={p.name}
                enName={p.enName}
                technique={p.technique}
                enTechnique={p.enTechnique}
                width={500 / (p.height / p.width)}
                height={500}
                dimensions={p.dimensions}
                title={p.title}
                enTitle={p.enTitle}
                text={`${p.text?.trim().split(' ').slice(0, 50). join(' ')}...`}
                enText={`${p.enText?.trim().split(' ').slice(0, 50). join(' ')}...`}
                bulgarian={bulgarian}
              />
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default LatestWork;
