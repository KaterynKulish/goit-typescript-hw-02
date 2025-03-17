import { FC } from 'react';
import { Photo } from '../../types';

interface ImageCardProps {
  photo: Photo;
  openModal: (src: string, alt: string) => void;
}

const ImageCard = ({ photo, openModal }: ImageCardProps) => {
  return (
    <div>
      <img
        src={photo.urls.small}
        alt={photo.alt_description}
        rel="noreferrer noopener"
        onClick={() => openModal(photo.urls.regular, photo.alt_description)}
      />
    </div>
  );
};

export default ImageCard;
