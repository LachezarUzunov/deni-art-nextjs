import Painting from '@/components/paintings/painting';
import classes from './index.module.css'
import PaintingWithModal from '@/components/paintings/paintingWithModal';
import { useContext, useState } from 'react';
import LanguageContext from '@/store/language';
import { FaBackward, FaForward } from 'react-icons/fa';

const PAINTINGS = [
    {
      key: "1",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "CV снимка",
      enName: "CV Photo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "2",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Мишел",
      enName: "Mishel",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "3",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Невинно синьо пиле",
      enName: "Innocent Blue Bird",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "4",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Сънотворна река",
      enName: "Dream River",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "5",
      height: 30,
      width: 25,
      dimensions: "30 x 25",
      name: "Изгубената маска",
      enName: "The Lost Mask",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "6",
      height: 30,
      width: 25,
      dimensions: "30 x 25",
      name: "Панеленият град",
      enName: "Panelcity",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "7",
      height: 29,
      width: 20,
      dimensions: "29 x 20",
      name: "Голият космонавт",
      enName: "The Naked Cosmonaut",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "8",
      height: 35,
      width: 25,
      dimensions: "35 x 25",
      name: "Мрачен бъбрек-ембрион",
      enName: "Dark Kidney Embryo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "9",
      height: 35,
      width: 25,
      dimensions: "35 x 25",
      name: "Пиле на сивия пазар",
      enName: "Chicken On The Gray Market",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "10",
      height: 30,
      width: 25,
      dimensions: "30 x 25",
      name: "Шеф",
      enName: "Boss",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "11",
      height: 33,
      width: 25,
      dimensions: "33 x 25",
      name: "Мементо мори",
      enName: "Memento Mori",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "12",
      height: 30,
      width: 20,
      dimensions: "30 x 20",
      name: "Степната вълчица",
      enName: "The Steppen Wolf",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "13",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Алиса не е тук",
      enName: "Alice Is Not Here",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "14",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Котаракът анархист",
      enName: "Tomcat The Anarchist",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "15",
      height: 21,
      width: 15,
      dimensions: "21 x 15",
      name: "Летяща риба",
      enName: "Flying Fish",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "16",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Унищожение",
      enName: "Destruction",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "17",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Пиленца",
      enName: "Birds",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "18",
      height: 20,
      width: 16,
      dimensions: "20 x 16",
      name: "Зъбчо",
      enName: "Toothy",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "19",
      height: 40,
      width: 30,
      dimensions: "40 x 30",
      name: "Детстоукър",
      enName: "Deathstalker",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "20",
      height: 40,
      width: 29,
      dimensions: "40 x 29",
      name: "Самотно око",
      enName: "Lonely Eye",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "21",
      height: 34,
      width: 24,
      dimensions: "34 x 24",
      name: "Властелинът на обеците",
      enName: "The Lord Of The Earings",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "22",
      height: 22,
      width: 17,
      dimensions: "22 x 17",
      name: "Извънземна икона",
      enName: "Alienicon",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "23",
      height: 20,
      width: 17,
      dimensions: "20 x 17",
      name: "Странна двойка",
      enName: "Strange Couple",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "24",
      height: 22,
      width: 17,
      dimensions: "22 x 17",
      name: "Главата на врага",
      enName: "Enemy's Head",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "25",
      height: 25,
      width: 35,
      dimensions: "25 x 35",
      name: "Джо",
      enName: "Joe",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
      wide: true
    },
    {
      key: "26",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Лъв",
      enName: "Leo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "27",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Невротично оранжево",
      enName: "Neurotic Orange",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "28",
      height: 32,
      width: 24,
      dimensions: "32 x 24",
      name: "Лисица",
      enName: "Fox",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "29",
      height: 30,
      width: 20,
      dimensions: "30 x 20",
      name: "Лисица II",
      enName: "Fox II",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "30",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Мунин",
      enName: "Munin",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "31",
      height: 28,
      width: 22,
      dimensions: "28 x 22",
      name: "Офис пространство",
      enName: "Office Space",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "32",
      height: 30,
      width: 30,
      dimensions: "30 x 30",
      name: "Бърнаут",
      enName: "Burnout",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "33",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Не",
      enName: "No",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "34",
      height: 34,
      width: 25,
      dimensions: "34 x 25",
      name: "Зеленото е новото зелено",
      enName: "Green Is The New Green",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "35",
      height: 34,
      width: 24,
      dimensions: "34 x 24",
      name: "Дървото на недоразумението",
      enName: "Tree Of Misconception",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "36",
      height: 30,
      width: 20,
      name: "Смъртта като дете",
      dimensions: "30 x 20",
      enName: "Death As A Kid",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "37",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Всяка ВИП русалка и нейното протеже",
      enName: "VIP Mermaid And Her Protege",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "38",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Матричният човек",
      enName: "Matrixman",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "39",
      height: 30,
      width: 20,
      dimensions: "30 x 20",
      name: "Лилава сянка",
      enName: "Purple Shadow",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "40",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Звезден храст",
      enName: "Star Bush",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "41",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Хармонично объркване",
      enName: "Harmonic Confusion",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "42",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Откровено недоверие",
      enName: "Sincere Disbelief",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "43",
      height: 23,
      width: 17,
      dimensions: "23 x 17",
      name: "Разстроен охлюв",
      enName: "An Upset Snail",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "44",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Тайно синьо",
      enName: "Secret Blue",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "45",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Далечен световъртеж",
      enName: "Distant Vertigo",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "46",
      height: 20,
      width: 15,
      dimensions: "20 x 15",
      name: "Смъртна илюстрация",
      enName: "Deadly Illustration",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "47",
      height: 21,
      width: 15,
      dimensions: "21 x 15",
      name: "Триумф на нищото",
      enName: "Triumph Of Nothingness",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "48",
      height: 27,
      width: 20,
      dimensions: "27 x 20",
      name: "Мимими",
      enName: "Mimimi",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },   
    {
      key: "49",
      height: 32,
      width: 24,
      dimensions: "32 x 24",
      name: "Сърцето на пришълеца",
      enName: "The Heart Of The Alien",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },
    {
      key: "50",
      height: 32,
      width: 24,
      dimensions: "32 x 24",
      name: "Космически запетайки",
      enName: "Space Commas",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "51",
      height: 33,
      width: 25,
      dimensions: "33 x 25",
      name: "Трите вещици",
      enName: "The Three Witches",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },  
    {
      key: "52",
      height: 34,
      width: 26,
      dimensions: "34 x 26",
      name: "Окторусалка",
      enName: "Octomermaid",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    }, 
    {
      key: "53",
      height: 34,
      width: 26,
      dimensions: "34 x 26",
      name: "Отбранителна позиция",
      enName: "Defensive Position",
      technique: "акрил, смесена техника",
      enTechnique: "acrylic, mixed media",
      продадена: false,
      sold: false,
    },                                                                                                                                                                                                              
  ];

export default function Drawings() {
    const languageCtx = useContext(LanguageContext);

    const bulgarian = languageCtx.version;

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
                            bulgarian={bulgarian}
                            wide={p.wide}
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
    )
}