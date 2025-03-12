import ImageCard from '../ImageCard/ImageCard';
import s from './ImageGallery.module.css';

const ImageGallery = ({ photos, openModal }) => {
  return (
    <div className={s.wrapper}>
      <ul className={s.list}>
        {photos.map(photo => {
          //   console.log(photo);

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
