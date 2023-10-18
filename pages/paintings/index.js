import classes from './index.module.css'
import PaintingWithModal from '@/components/paintings/paintingWithModal';
import { useContext, useState } from 'react';
import LanguageContext from '@/store/language';
import { getAllPaintings } from '@/lib/paintings-util';
import { FaBackward, FaForward } from 'react-icons/fa'

export default function Paintings(props) {
  const paintings = props.paintings;
  const languageCtx = useContext(LanguageContext);
  const bulgarian = languageCtx.version;

  const [currentPage, setCurrentPage] = useState(1);
  const paintingsPerPage = 5;
  const indexOfLastPainting = currentPage * paintingsPerPage;
  const indexOfFirstPainting = indexOfLastPainting - paintingsPerPage;
  const currentPaintings = paintings.slice(indexOfFirstPainting, indexOfLastPainting);

  // Pagination Controls
  const pageNumbers = Math.ceil(paintings.length / paintingsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };


  for (const painting of paintings) {
    const splitted = painting.content.split('enText:');
    const enText = splitted[1];
    const text = splitted[0];
    painting.text = text;
    painting.enText = enText;
  }
    
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
                              src={`/paintings/${p.name}.jpg`}
                              alt={p.name}
                              name={p.name}
                              enName={p.enName}
                              technique={p.technique}
                              enTechnique={p.enTechnique}
                              width={400 / (p.height / p.width)}
                              height={400}
                              dimensions={p.dimensions}
                              heading={p.heading}
                              enHeading={p.enHeading}
                              text={p.text}
                              enText={p.enText}
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

export function getStaticProps() {
  const paintings = getAllPaintings();

  return {
    props: {
      paintings
    }
  }
}