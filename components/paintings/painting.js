import Image from 'next/image';
import classes from './painting.module.css';
import React, { useState } from 'react';
import PaintingOverlayModal from '../layout/paintingOverlay';

export default function Painting({ src, alt, name, enName, technique, enTechnique, width, height, dimensions, heading, enHeading, text, enText, bulgarian }) {
    const [showImgOverlay, setShowImgOverlay] = useState(false);
    const onClose = () => {
        setShowImgOverlay(false)
    }

    return (

        <React.Fragment>
        {showImgOverlay && <PaintingOverlayModal img={src} alt={alt} width={width} height={height} onClose={onClose}/>}
        
        <div className={classes.image_section}>
            <div className={`${classes.display}`}>
                <Image onClick={() => setShowImgOverlay(true)} src={src} alt={alt} width={`${Math.floor(width * 1.2)}`} height={`${Math.floor(height * 1.2)}`}/>
            </div>
            <div className={`${classes.display_sm} ${classes.centered}`}>
                <Image src={src} alt={alt} width={`${Math.floor(width * 0.9)}`} height={`${Math.floor(height * 0.9)}`}/>
            </div>
            <div>
                <h2 className={classes.title}>{ bulgarian ? `${name}` : `${enName}`}</h2>
                <p>{ bulgarian ? `Техника на рисуване - ${technique}` : `Drawing technique - ${enTechnique}`}</p>
                <p>{ bulgarian ? `Размери в сантиметри - ${dimensions}` : `Dimensions in sentimeters - ${dimensions}`}</p>
                {heading && <h3>{ bulgarian ? `${heading}` : `${enHeading}`}</h3>}
                {text && <p className={classes.text}>{ bulgarian ? `${text}` : `${enText}`}</p>}
            </div>  
        </div>
        </React.Fragment>
    )
}