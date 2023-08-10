import Image from 'next/image';
import classes from './painting.module.css';
import React, { useState } from 'react';
import PaintingOverlayModal from '../layout/paintingOverlay';

export default function Painting({ src, alt, name, enName, technique, enTechnique, width, height, dimensions, heading, enHeading, text, enText, bulgarian }) {
    const [showImgOverlay, setShowImgOverlay] = useState(false);
    const onClose = () => {
        setShowImgOverlay(false)
    }
   
    let splittedBg;
    let splittedEn;

    if (text && enText) {
        splittedBg = text.split('\n');
        splittedEn = enText.split('\n')
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
                { bulgarian ?
                    <h2 className={classes.title}>{name}</h2>
                :
                    <h2 className={`${classes.title} henni`}>{enName}</h2>
                }
                { bulgarian ?
                    <p>Техника на рисуване - {technique}</p>
                :
                    <p className='typewriter'>Drawing technique - {enTechnique}</p>
                }
                { bulgarian ?
                    <p>Размери в сантиметри - {dimensions}</p>
                :
                    <p className='typewriter'>Dimensions in sentimeters - {dimensions}</p>
                }
                { bulgarian ?
                    <h3>{heading}</h3>
                :
                    <h3 className='henni'>{enHeading}</h3>
                }
            
                {splittedBg && bulgarian ? 
                    <div className={classes.text}>
                        {splittedBg.map((para, index) => (<p key={index}>{para}</p>))}
                    </div>
                : splittedEn ? 
                    <div className={classes.text}>
                        {splittedEn.map((para, index) => (<p className='typewriter' key={index}>{para}</p>))}
                    </div>
                : 
                    null
                }
            </div>  
        </div>
        </React.Fragment>
    )
}