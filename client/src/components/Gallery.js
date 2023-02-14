import React, { useEffect, useState } from 'react';
import { getImages } from '../api/index';
import Image from './Image';

const Gallery = ({setSelectedImg, imageList, setImageList}) => {
  const [nextCursor, setNextCursor] = useState(null);

  useEffect(() => {
    getImages().then(result => {
      setImageList(result.resources);
      setNextCursor(result.next_cursor)
    });
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [imageList]);

  const onScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    if (scrollTop + clientHeight + 20 >= scrollHeight) {
      handleLoadMore();
    }
  };

  const handleLoadMore = async () => {
		const responseJson = await getImages(nextCursor);
		setImageList((currentImageList) => [
			...currentImageList,
			...responseJson.resources,
		]);
		setNextCursor(responseJson.next_cursor);
	};

  return (
    <div className='gallery' id='gallery'>
      {imageList.map((img) => (
        <div onClick={() => setSelectedImg(img)}>
          <Image img={img}/>
        </div>
        ))}
    </div>
  )
}

export default Gallery;