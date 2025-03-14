import { FC } from 'react';
import s from './LoadMoreBtn.module.css';

interface LoadMoreBtnProps {
  handleLoadMore: () => void;
}

const LoadMoreBtn: FC<LoadMoreBtnProps> = ({ handleLoadMore }) => {
  const handleOnClick = () => handleLoadMore();

  return (
    <button onClick={handleOnClick} className={s.btn}>
      Load more...
    </button>
  );
};

export default LoadMoreBtn;
