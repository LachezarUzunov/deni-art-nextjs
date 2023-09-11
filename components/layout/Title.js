import classes from './Title.module.css';

const Title = ({ title }) => {

    return (
        <div className={classes.title}>
            <h1> {title} </h1>
        </div>
    )
}

export default Title;