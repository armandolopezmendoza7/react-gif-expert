import { useState ,useEffect } from 'react'
import {getGifs} from '../helpers/getGifs';

export const useFetchGifs = ( category ) => {
    const [images, setimages] = useState([]);
    const [isLoading, setIsLoading] = useState( true );

    const getImages = async() => {
      const newImgs = await getGifs(category);
      setimages(newImgs);
      setIsLoading(false);
    };
  
    useEffect( () => {
      getImages();
    }, []);
  
    return {
        images,
        isLoading
    }
}
