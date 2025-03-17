import { FC } from 'react';
import { Photo } from '../../types';
import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

interface ImageGalleryProps {
  photos: Photo[];
  openModal: (src: string, alt: string) => void;
}

// const ImageGallery: FC<ImageGalleryProps> = ({ photos, openModal }) => {
//   console.log(photos);
//   return (
//     <div className={s.wrapper}>
//       <ul className={s.list}>
//         {photos.map(photo => {
//           console.log(photo);

//           return (
//             <li key={photo.id} className={s.item}>
//               <ImageCard photo={photo} openModal={openModal} />
//             </li>
//           );
//         })}
//       </ul>
//     </div>
//   );
// };

const ImageGallery = ({ photos, openModal }: ImageGalleryProps) => {
  console.log(photos);
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {photos.map(photo => {
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
