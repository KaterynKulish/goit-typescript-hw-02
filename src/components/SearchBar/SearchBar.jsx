import { useState } from 'react';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    if (!value.trim()) {
      return toast('Enter a search term');
    }
    onSubmit(value.trim());
    setValue('');
  };

  return (
    <form onSubmit={handleSubmit} className={s.form}>
      <input
        onChange={e => setValue(e.target.value)}
        type="text"
        value={value}
        className={s.input}
      />
      <button type="submit" className={s.btnSearch}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
