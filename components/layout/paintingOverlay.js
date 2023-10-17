import classes from './paintingOverlay.module.css'
import Image from "next/image";

const PaintingOverlayModal = ({ img, alt, width, height, onClose }) => {

    return (
        <section>
            <div onClick={onClose} className={classes.backdrop}></div>
            <article className={classes.modal}>
                <div>  
                    <div>
                        <Image src={img} alt={alt} width={`${Math.floor(width * 1.8)}`} height={`${Math.floor(height * 1.8)}`}/>
                    </div>  
                </div>
            </article>
        </section>
    )
}

export default PaintingOverlayModal;