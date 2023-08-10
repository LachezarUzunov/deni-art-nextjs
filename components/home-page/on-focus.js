import { BsArrowRight } from "react-icons/bs";

import Image from "next/image";
import Link from "next/link";
import classes from "./on-focus.module.css";

const OnFocus = ({ bulgarian }) => {
  return (
    <section className={classes.background}>
      <div className={classes.mobile}>
        {bulgarian ?
          <h2>На фокус</h2>
        :
          <h2 className="henni">On focus</h2>
        }
        {bulgarian ?
          <h3>Басмая</h3>
        :
          <h3 className="henni">Basmaya</h3>
        }
      </div>
      <section className={`container ${classes.focus__section}`}>
        <div className={classes.centered}>
          <Image
            className={classes.image_onFocus}
            src="/paintings/Басмая.jpg"
            alt="Басмая"
            width={600 / (60 / 40)}
            height={600}
          />
        </div>
        
        <div className={`${classes.image_onFocus_m}`}>
          <Image
            src="/paintings/Басмая.jpg"
            alt="Басмая"
            width={500 / (60 / 40)}
            height={500}
          />
        </div>
      
        <article className={classes.onfocus__info}>
          { bulgarian ?
            <h2 className={classes.desktop}>На фокус</h2>
          :
            <h2 className={`${classes.desktop} henni`}>On focus</h2>
          }
          { bulgarian ? 
            <h3 className={classes.desktop}>Басмая</h3>
          :
            <h3 className={`${classes.desktop} henni`}>Basmaya</h3>
          }
          
          { bulgarian ?
            <p>Размери в сантиметри - 60 х 40</p>
          :
            <p className="typewriter">Dimensions in santimeters - 60 x 40</p>
          }
          
          { bulgarian ?
            <p>
              Звездите от безбройните блестящи черепни кухини изсипват се. Небето със своите черепи,  наместо звезди, злокобно набъбва. Гласовете им в моя вселяват се. В очната кухина на гигантския череп потъвам. Попадам в съня ти. Виждам несъответствието на любовта като интензивен оголен пулс. Влизам в миналите, настоящите и бъдещите ти тела – (в) безкрайността на затвора. Сълзата ми отключва тайната на Смъртта. Аз съм отвъд Бог единствено като човек. Ти си отвъд Бог единствено като мен.
            </p>
          :
            <p className="typewriter">
              The stars pour out from countless glittering cranial cavities. The sky with its skulls instead of stars swells ominously. Their voices inhabit mine. Into the eyehole of the giant skull I sink. I fall into your dream. I see the disparity of love as an extreme, naked pulse. I enter your past, present and future bodies – (into) the infinity of the prison. My tear unlocks the secret of Death: /n/n I am beyond God only as human. /n You are beyond God only as me.
            </p>
          }
          
          <div className={classes.centered}>
            { bulgarian ?
              <Link className={`btn__primary ${classes.btn}`} href="/za-men">
              Окачи я в своя дом {' '} <BsArrowRight />
              </Link>
            :
              <Link className={`btn__primary typewriter ${classes.btn}`} href="/za-men">
              Hang it in your home {' '} <BsArrowRight />
              </Link>
            }
            
          </div>
         
        </article>
      </section>
    </section>
  );
};

export default OnFocus;
