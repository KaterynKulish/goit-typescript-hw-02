import { FC, useState, FormEvent } from 'react';
import s from './SearchBar.module.css';
import toast from 'react-hot-toast';

interface OnSubmitProps {
  onSubmit: (value: string) => void;
}

const SearchBar: FC<OnSubmitProps> = ({ onSubmit }) => {
  const [value, setValue] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
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
