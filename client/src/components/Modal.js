import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faTrash } from '@fortawesome/free-solid-svg-icons'
import { starImage, deleteImage } from '../api/index';

const Modal = ({ setSelectedImg, selectedImg, setImageList }) => {

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  const onStar = () => {
    starImage(selectedImg.public_id, selectedImg.context.custom.starred);
    setImageList((current) => current.map((image) => (image.public_id === selectedImg.public_id) ? { ...image, context: {custom: { starred: `${selectedImg.context.custom.starred==='false'}`}}} : image));
    setSelectedImg(null);
  }

  const onDelete = () => {
    deleteImage(selectedImg.public_id);
    setImageList((current) => current.filter((image) => image.public_id !== selectedImg.public_id));
    setSelectedImg(null);
  }

  return (
    <div className="backdrop" onClick={handleClick}>
        <div className='modal'>
          <img src={selectedImg.url} alt="enlarged pic"/>
          <div className='buttons'>
            <FontAwesomeIcon className='icon' icon={faStar} onClick={onStar} />
            <div className='spacer'></div>
            <FontAwesomeIcon className='icon' icon={faTrash} onClick={onDelete}/>
          </div>
        </div>
    </div>
  )
}

export default Modal;