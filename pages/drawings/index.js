import Painting from '@/components/paintings/painting';
import classes from './index.module.css'
import PaintingWithModal from '@/components/paintings/paintingWithModal';
import { Fragment, useContext, useState } from 'react';
import LanguageContext from '@/store/language';
import { FaBackward, FaForward } from 'react-icons/fa';
import Head from 'next/head';

const PAINTINGS = [
    {
      key: "1",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "CV снимка",
      enName: "CV Photo",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "2",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Мишел",
      enName: "Michelle",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "3",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Невинно синьо пиле",
      enName: "Innocent Blue Bird",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "4",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Сънотворна река",
      enName: "Dream River",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "5",
      height: 33,
      width: 24,
      dimensions: "33 x 24",
      name: "Изгубената маска",
      enName: "The Lost Mask",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: true,
      sold: true,
      note: false,
      enNote: false
    }, 
    {
      key: "6",
      height: 33,
      width: 24,
      dimensions: "33 x 24",
      name: "Панеленият град",
      enName: "Panelcity",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },  
    {
      key: "7",
      height: 29,
      width: 20,
      dimensions: "29 x 20",
      name: "Голият космонавт",
      enName: "The Naked Cosmonaut",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "8",
      height: 35,
      width: 25,
      dimensions: "35 x 25",
      name: "Мрачен ембрион",
      enName: "Dark Embryo",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "9",
      height: 35,
      width: 25,
      dimensions: "35 x 25",
      name: "Пиле на сивия пазар",
      enName: "Chicken On The Gray Market",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "10",
      height: 33,
      width: 24,
      dimensions: "33 x 24",
      name: "Шеф",
      enName: "Boss",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "11",
      height: 33,
      width: 25,
      dimensions: "33 x 25",
      name: "Мементо мори",
      enName: "Memento Mori",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "12",
      height: 32,
      width: 23,
      dimensions: "32 x 23",
      name: "Степният вълк",
      enName: "The Steppen Wolf",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "13",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Алиса не е тук",
      enName: "Alice Is Not Here",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "14",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Котаракът анархист",
      enName: "Tomcat The Anarchist",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "15",
      height: 21,
      width: 15,
      dimensions: "21 x 15",
      name: "Летяща риба",
      enName: "Flying Fish",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "16",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Унищожение",
      enName: "Destruction",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "17",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Пиленца",
      enName: "Birds",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "18",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Зъбчо",
      enName: "Toothy",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "19",
      height: 40,
      width: 30,
      dimensions: "40 x 30",
      name: "Детстоукър",
      enName: "Deathstalker",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "20",
      height: 30,
      width: 40,
      dimensions: "30 x 40",
      name: "Самотно око",
      enName: "Lonely Eye",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      wide: true,
      note: false,
      enNote: false
    },
    {
      key: "21",
      height: 34,
      width: 24,
      dimensions: "34 x 24",
      name: "Властелинът на обеците",
      enName: "The Lord Of The Earrings",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "22",
      height: 22,
      width: 17,
      dimensions: "22 x 17",
      name: "Извънземна икона",
      enName: "Alienicon",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "23",
      height: 22,
      width: 17,
      dimensions: "22 x 17",
      name: "Странна двойка",
      enName: "Strange Couple",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "24",
      height: 22,
      width: 17,
      dimensions: "22 x 17",
      name: "Главата на врага",
      enName: "Enemy's Head",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "25",
      height: 35,
      width: 25,
      dimensions: "35 x 25",
      name: "Джо",
      enName: "Joe",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "26",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Лъв",
      enName: "Leo",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: true,
      sold: true,
      note: false,
      enNote: false
    },
    {
      key: "27",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Невротично оранжево",
      enName: "Neurotic Orange",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "28",
      height: 33,
      width: 24,
      dimensions: "33 x 24",
      name: "Лисица",
      enName: "Fox",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "29",
      height: 32,
      width: 23,
      dimensions: "32 x 23",
      name: "Лисица II",
      enName: "Fox II",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "30",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Мунин",
      enName: "Munin",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },  
    {
      key: "31",
      height: 28,
      width: 22,
      dimensions: "28 x 22",
      name: "Офис пространство",
      enName: "Office Space",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "32",
      height: 30,
      width: 30,
      dimensions: "30 x 30",
      name: "Бърнаут",
      enName: "Burnout",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      wide: true,
      note: "асиметрична форма",
      enNote: "asymmetrical shape"
    }, 
    {
      key: "33",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Не",
      enName: "No",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "34",
      height: 34,
      width: 25,
      dimensions: "34 x 25",
      name: "Зеленото е новото зелено",
      enName: "Green Is The New Green",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: true,
      sold: true,
      note: false,
      enNote: false
    },  
    {
      key: "35",
      height: 24,
      width: 34,
      dimensions: "24 x 34",
      name: "Дървото на недоразумението",
      enName: "Tree Of Misconception",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      wide: true,
      note: false,
      enNote: false
    },
    {
      key: "36",
      height: 30,
      width: 20,
      name: "Смъртта като дете",
      dimensions: "30 x 20",
      enName: "Death As A Kid",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "37",
      height: 15,
      width: 20,
      dimensions: "15 x 20",
      name: "ВИП русалка и нейното протеже",
      enName: "VIP Mermaid And Her Protege",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      wide: true,
      note: "Това са две картини, размерите на всяка 15 x 20, двете заедно 30 x 40.",
      enNote: "These are two paintings, dimensions of each one 15 x 20, together 30 x 40."
    },
    {
      key: "38",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Матричният човек",
      enName: "Matrixman",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },  
    {
      key: "39",
      height: 32,
      width: 21,
      dimensions: "32 x 21",
      name: "Лилава сянка",
      enName: "Purple Shadow",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "40",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Звезден храст",
      enName: "Star Bush",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "41",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Хармонично объркване",
      enName: "Harmonic Confusion",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "42",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Откровено недоверие",
      enName: "Sincere Disbelief",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "43",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Разстроен охлюв",
      enName: "An Upset Snail",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "44",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Тайно синьо",
      enName: "Secret Blue",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },  
    {
      key: "45",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Далечен световъртеж",
      enName: "Distant Vertigo",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "46",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Смъртна илюстрация",
      enName: "Deadly Illustration",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "47",
      height: 21,
      width: 15,
      dimensions: "21 x 15",
      name: "Триумф на нищото",
      enName: "Triumph Of Nothingness",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "48",
      height: 28,
      width: 22,
      dimensions: "28 x 22",
      name: "Мимими",
      enName: "Mimimi",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: true,
      sold: true,
      note: false,
      enNote: false
    },   
    {
      key: "49",
      height: 32,
      width: 24,
      dimensions: "32 x 24",
      name: "Сърцето на пришълеца",
      enName: "The Heart Of The Alien",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },
    {
      key: "50",
      height: 32,
      width: 24,
      dimensions: "32 x 24",
      name: "Космически запетайки",
      enName: "Space Commas",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },  
    {
      key: "51",
      height: 33,
      width: 25,
      dimensions: "33 x 25",
      name: "Трите вещици",
      enName: "The Three Witches",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: true,
      sold: true,
      note: false,
      enNote: false
    },  
    {
      key: "52",
      height: 34,
      width: 26,
      dimensions: "34 x 26",
      name: "Окторусалка",
      enName: "Octomermaid",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    }, 
    {
      key: "53",
      height: 34,
      width: 26,
      dimensions: "34 x 26",
      name: "Отбранителна позиция",
      enName: "Defensive Position",
      technique: "смесена",
      enTechnique: "mixed media",
      продадена: false,
      sold: false,
      note: false,
      enNote: false
    },                                                                                                                                                                                                              
  ];

export default function Drawings() {
    const languageCtx = useContext(LanguageContext);

    const activeLang = languageCtx.version;

    const [currentPage, setCurrentPage] = useState(1);
    const paintingsPerPage = 10;
    const indexOfLastPainting = currentPage * paintingsPerPage;
    const indexOfFirstPainting = indexOfLastPainting - paintingsPerPage;
    const currentPaintings = PAINTINGS.slice(indexOfFirstPainting, indexOfLastPainting);
  
    // Pagination Controls
    const pageNumbers = Math.ceil(PAINTINGS.length / paintingsPerPage);
  
    const handlePageChange = (pageNumber) => {
      setCurrentPage(pageNumber);
    };

    return (
      <Fragment>
        { activeLang &&  
        <Head>
          <title>Моите рисунки за продажба</title>
          <meta
            name="description"
            content="Абстрактни и красиви картини за стена, хол, спалня за продажба. Купи картина за дом, офис, ресторант"  
          >
          </meta>
        </Head>}
        {! activeLang &&  
        <Head>
          <title>My Drawings for Sell</title>
          <meta
            name="description"
            content="Abstract and beautiful paintings for wall, bedroom, living room. Buy painting for your home, office, restaurant."  
          >
          </meta>
        </Head>}
        <section className={classes.background}>
            <section className={classes.overlay}>
            <section className="container">
            <div className={`${classes.pagination} ${classes.topPag}`}>
                  <button onClick={() => setCurrentPage(1)}><FaBackward /></button>
                  {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? classes.active : ''}
                  >
                    {pageNumber}
                  </button>
                  ))}
                  <button onClick={() => setCurrentPage(pageNumbers)}><FaForward /></button>
                </div>
                {currentPaintings.map(p => {
                    return (
                        <PaintingWithModal
                            key={p.key}
                            src={`/drawings/${p.name}.jpg`}
                            alt={p.name}
                            name={p.name}
                            enName={p.enName}
                            technique={p.technique}
                            enTechnique={p.enTechnique}
                            width={400 / (p.height / p.width)}
                            height={400}
                            dimensions={p.dimensions}
                            sold={p.sold}
                            bulgarian={activeLang}
                            wide={p.wide}
                            note={p.note}
                            enNote={p.enNote}
                        />
                  );
                })}

                <div className={`${classes.pagination}`}>
                  <button onClick={() => setCurrentPage(1)}><FaBackward /></button>
                  {Array.from({ length: pageNumbers }, (_, index) => index + 1).map((pageNumber) => (
                  <button
                    key={pageNumber}
                    onClick={() => handlePageChange(pageNumber)}
                    className={currentPage === pageNumber ? classes.active : ''}
                  >
                    {pageNumber}
                  </button>
                  ))}
                  <button onClick={() => setCurrentPage(pageNumbers)}><FaForward /></button>
                </div>
            </section>
            </section> 
        </section>
      </Fragment>
    )
}