import classes from './paintingOverlayMobile.module.css'
import Image from "next/image";

const PaintingOverlayModalMobile = ({ img, alt, width, height, onClose, wide }) => {

    return (
        <section>
            <div onClick={onClose} className={classes.backdrop}></div>
            <article className={classes.modal}>
                <div>  
                    <div>
                        <Image src={img} alt={alt} width={`${Math.floor(width * 1.1)}`} height={`${Math.floor(height * 1.1)}`}/>
                    </div> 
                   
                </div>
            </article>
        </section>
    )
}

export default PaintingOverlayModalMobile;