import Image from 'next/image';
import classes from './painting.module.css';
import React, { useState } from 'react';
import PaintingOverlayModal from '../layout/paintingOverlay';
import ImgFrame from '../layout/ImgFrame';
import Link from 'next/link';
import Title from '../layout/Title';

export default function Painting({ src, alt, name, enName, technique, enTechnique, width, height, dimensions, heading, enHeading, text, enText, bulgarian, sold }) {
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
        { bulgarian ?
                <Title title={name} bulgarian={bulgarian}/>
            :
                <Title title={enName} className={`${classes.title} henni`}></Title>
        }
        <div className={classes.image_section}>
       
            <div className={`${classes.display}`}>
            
                <Image onClick={() => setShowImgOverlay(true)} src={src} alt={alt} width={`${Math.floor(width * 1.1)}`} height={`${Math.floor(height * 1.1)}`}/>
               
            </div>
            <div className={`${classes.display_sm} ${classes.centered}`}>
                <Image src={src} alt={alt} width={`${Math.floor(width * 0.9)}`} height={`${Math.floor(height * 0.9)}`}/>
            </div>
            
            <div>
                
                { bulgarian ?
                    <p className='bgFont'>Техника на рисуване - {technique}</p>
                :
                    <p className='typewriter'>Drawing technique - {enTechnique}</p>
                }
                { bulgarian ?
                    <p className='bgFont'>Размери в сантиметри - {dimensions}</p>
                :
                    <p className='typewriter'>Dimensions in sentimeters - {dimensions}</p>
                }
                { sold && bulgarian ? 
                    <p className='bgFont'>ПРОДАДЕНА</p>
                : ''}
                { sold && ! bulgarian ? 
                    <p className='typewriter'>SOLD</p>
                : ''}
                { bulgarian ?
                    <h3>{heading}</h3>
                :
                    <h3 className='henni'>{enHeading}</h3>
                }
            
                {splittedBg && bulgarian ? 
                    <div className={`${classes.text}`}>
                        {splittedBg.map((para, index) => (<p className={`bgFont`} key={index}>{para}</p>))}
                    </div>
                : splittedEn ? 
                    <div className={classes.text}>
                        {splittedEn.map((para, index) => (<p className='typewriter' key={index}>{para}</p>))}
                    </div>
                : 
                    null
                }
                {! sold && <div className={classes.centered}>
                    { bulgarian ?
                    <Link className={`btn__primary ${classes.btn} bgFont`} href="/contact-me">
                    Окачи я в своя дом
                    </Link>
                    :
                    <Link className={`btn__primary typewriter`} href="/contact-me">
                    Hang it in your home
                    </Link>
                    }
                </div> }
                
            </div>  
        </div>
        </React.Fragment>
    )
}