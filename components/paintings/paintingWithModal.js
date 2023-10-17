import React, { useState } from 'react';
import Painting from './painting';
import PaintingOverlayModal from '../layout/paintingOverlay';

const PaintingWithModal = ({ 
  src, 
  alt, 
  name, 
  enName, 
  technique, 
  enTechnique, 
  width, 
  height, 
  dimensions, 
  heading, 
  enHeading, 
  text, 
  enText, 
  bulgarian, 
  sold,
  wide
}) => {
  const [showImgOverlay, setShowImgOverlay] = useState(false);

  const onClose = () => {
    setShowImgOverlay(false);
  };

return (
    <React.Fragment>
      <Painting 
        src={src} 
        alt={alt}
        name={name}
        enName={enName}
        technique={technique}
        enTechnique={enTechnique}
        width={width} 
        height={height} 
        dimensions={dimensions}
        heading={heading} 
        enHeading={enHeading}
        text={text}
        enText={enText}
        bulgarian={bulgarian}
        sold={sold}
        wide={wide}
        onClick={() => setShowImgOverlay(true)} />
      {showImgOverlay && (
        <PaintingOverlayModal 
          img={src} 
          alt={alt} 
          width={width} 
          height={height} 
          onClose={onClose}
          wide={wide} />
      )}
    </React.Fragment>
  );
};

export default PaintingWithModal;