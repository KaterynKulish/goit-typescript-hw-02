const ImageCard = ({ photo, openModal }) => {
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
