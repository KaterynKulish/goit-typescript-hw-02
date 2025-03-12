import s from './LoadMoreBtn.module.css';

const LoadMoreBtn = ({ handleLoadMore }) => {
  const handleOnClick = () => handleLoadMore();

  return (
    <button onClick={handleOnClick} className={s.btn}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
