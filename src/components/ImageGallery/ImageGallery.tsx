import { FC } from 'react';
import { Photos } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  photos: Photos[];
  openModal: (src: string, alt: string) => void;
}

const ImageGallery: FC<ImageGalleryProps> = ({ photos, openModal }) => {
  console.log(photos);
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {photos.map(photo => {
          console.log(photos);
          console.log(photo);

          return (
            <li key={photo.id} className={s.item}>
              <ImageCard photo={photo} openModal={openModal} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ImageGallery;
