import Image from 'next/image';
import classes from './painting.module.css';

export default function Painting({ src, alt, technique, width, height, dimensions, text }) {

    return (
        <div className={classes.image_section}>
            <div className={`${classes.display}`}>
                <Image src={src} alt={alt} width={width * 1.2} height={height * 1.2}/>
            </div>
            <div className={`${classes.display_sm} ${classes.centered}`}>
                <Image src={src} alt={alt} width={width} height={height}/>
            </div>
            <div>
                <h2 className={classes.title}>{alt}</h2>
                <p>Техника на рисуване - {technique}</p>
                <p>Размери в сантиметри - {dimensions}</p>
                <p className={classes.text}>{text}</p>
            </div>  
        </div>
    )
}