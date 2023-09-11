import classes from './Title.module.css';

const Title = ({ title, bulgarian }) => {

    return (
        <div className={classes.title}>
            { bulgarian ? <h1 className={`${classes.desktop} ${classes.gothic}`}>{title}</h1>
            : <h1 className={`${classes.desktop} henni`}>{title}</h1>} 
             { bulgarian ? <h1 className={`${classes.mobile} ${classes.gothic}`}>{title}</h1>
            : <h1 className={`${classes.mobile} henni`}>{title}</h1>}  
        </div>
    )
}

export default Title;