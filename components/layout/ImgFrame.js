import classes from './ImgFrame.module.css';

const ImgFrame = (props) => {

    return (
        <div className={classes.frame}>
          <div className={classes.border}>
            <div className={classes.image}>
              {props.children}
            </div>
          </div>
        </div>
    )
}

export default ImgFrame;