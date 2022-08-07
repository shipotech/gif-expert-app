import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {

  // Keep gifs in memory
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Run getGifs function
  const getImages = async () => {
    const gifs = await getGifs(category);
    setImages(gifs);
    setIsLoading(false);
  }

  // This will dispatch the function just once
  useEffect(() => {
    getImages();
  }, []);

  return {
    images,
    isLoading
  }
}