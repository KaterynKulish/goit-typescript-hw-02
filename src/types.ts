export interface ResData {
  results: Photo[];
  total: number;
  total_pages: number;
}
export interface Photo {
  id: string;
  alt_description: string;
  urls: {
    small: string;
    regular: string;
  };
}
