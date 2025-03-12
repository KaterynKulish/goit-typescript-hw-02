import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import fetchPhotos from './components/apiService/apiPhotos';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Loader from './components/Loader/Loader';
import ErrorMessage from './components/ErrorMessage/ErrorMessage';
import LoadMoreBtn from './components/LoadMoreBtn/LoadMoreBtn';
import ImageModal from './components/ImageModal/ImageModal';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState([]);
  const [loader, setLoader] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(15);
  const [isVisible, setIsVisible] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalSrc, setModalSrc] = useState('');
  const [modalAlt, setModalAlt] = useState('');

  const onSubmit = value => {
    console.log(value);
    setQuery(value);
    setPhotos([]);
    setIsError(false);
    setPage(1);
    setIsVisible(false);
  };

  useEffect(() => {
    if (!query) return;
    const getPhotos = async () => {
      setIsError(false);
      try {
        setLoader(true);
        const { results, total_pages } = await fetchPhotos(
          query,
          page,
          perPage
        );

        setPhotos(prev => [...prev, ...results]);
        console.log(results);
        console.log(total_pages);

        setIsVisible(page < total_pages);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setLoader(false);
      }
    };
    getPhotos();
  }, [query, page, perPage]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1);
  };

  const openModal = (src, alt) => {
    setModalIsOpen(true);
    setModalSrc(src);
    setModalAlt(alt);
  };
  const closeModal = () => {
    setModalIsOpen(false);
    setModalSrc('');
    setModalAlt('');
  };

  return (
    <div>
      <header>
        <SearchBar onSubmit={onSubmit} />{' '}
      </header>

      {photos.length > 0 && (
        <ImageGallery photos={photos} openModal={openModal} />
      )}
      {isError && <ErrorMessage isError={isError} />}
      {loader && <Loader />}
      {isVisible && <LoadMoreBtn handleLoadMore={handleLoadMore} />}
      <ImageModal
        modalIsOpen={modalIsOpen}
        closeModal={closeModal}
        src={modalSrc}
        alt={modalAlt}
      />
    </div>
  );
}

export default App;
