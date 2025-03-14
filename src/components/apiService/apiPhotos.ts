import axios from 'axios';
import { FC } from 'react';

const API_KEY = 'byqm53SSK-L4Jv3pruPB3aSmT7W9peOt8UrDpLC2JpY';

interface Data {
  results: [];
  total: number;
  total_pages: number;
}

const fetchPhotos = async <Data>(
  query: string,
  page: number,
  perPage: number
): Promise<Data> => {
  // const res = await axios.get(
  //   `https://api.unsplash.com/search/photos?client_id=${
  //     import.meta.env.VITE_API_KEY
  //   }&orientation=landscape&query=${query}&page=${page}&per_page=${perPage}`
  // );
  const res: Data = await axios.get(
    `https://api.unsplash.com/search/photos?client_id=${API_KEY}&orientation=landscape&query=${query}&page=${page}&per_page=${perPage}`
  );
  console.log(res);
  console.log(res.data);

  return res.data;
};
export default fetchPhotos;
