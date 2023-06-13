import Image from 'next/image';
import classes from './painting.module.css';

export default function Painting({ src, alt, technique, width, height, dimensions, text }) {

    return (
        <div className={classes.image_section}>
            <Image src={src} alt={alt} width={width} height={height}/>
            <div>
                <h1>{alt}</h1>
                <p>Техника на рисуване - {technique}</p>
                <p>Размери в сантиметри - {dimensions}</p>
                <p>{text}</p>
            </div>  
        </div>
    )
}