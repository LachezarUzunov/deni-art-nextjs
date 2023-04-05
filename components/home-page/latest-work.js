import classes from "./latest-work.module.css";
import Painting from "./painting";

const PAINTINGS = [
  {
    key: "1",
    height: 60,
    width: 40,
    dimensions: "60 на 40",
    name: "Вселена 47",
    technique: "акрил, смесена техника",
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

const LatestWork = () => {
  return (
    <section className={classes.background}>
      <section className="container">
        <div className={classes.painting__header}>
          <h2>Последни творби</h2>
          <h3>Върху какво работя напоследък</h3>
        </div>
        <article className={classes.painting}>
          {PAINTINGS.map((p) => {
            return (
              <Painting
                key={p.key}
                src={`/paintings/${p.name}.jpg`}
                alt={p.name}
                technique={p.technique}
                width={400 / (p.height / p.width)}
                height={400}
                dimensions={p.dimensions}
              />
            );
          })}
        </article>
      </section>
    </section>
  );
};

export default LatestWork;
