import React, { useState } from 'react';
import Painting from './painting';
import PaintingOverlayModal from '../layout/paintingOverlay';

const PaintingWithModal = ({ src, alt, technique, width, height, dimensions, text }) => {
  const [showImgOverlay, setShowImgOverlay] = useState(false);

  const onClose = () => {
    setShowImgOverlay(false);
  };

return (
    <React.Fragment>
      <Painting src={src} alt={alt} technique={technique} width={width} height={height} dimensions={dimensions} text={text} onClick={() => setShowImgOverlay(true)} />
      {showImgOverlay && (
        <PaintingOverlayModal img={src} alt={alt} width={width} height={height} onClose={onClose} />
      )}
    </React.Fragment>
  );
};

export default PaintingWithModal;