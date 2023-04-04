import classes from "./latest-work.module.css";
import Painting from "./painting";

const LatestWork = () => {
  return (
    <section className={classes.background}>
      <div>
        <h2>Последни творби</h2>
        <h3>Върху какво работя напоследък</h3>
      </div>
      <article>
        <Painting />
      </article>
    </section>
  );
};

export default LatestWork;
