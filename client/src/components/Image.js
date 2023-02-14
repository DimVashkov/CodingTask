import React from "react";
import { AdvancedImage } from "@cloudinary/react";
import { thumbnail } from "@cloudinary/url-gen/actions/resize";
import { Cloudinary } from "@cloudinary/url-gen";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Image = ({ img }) => {
  const cld = new Cloudinary({
    cloud: {
      cloudName: "dixyumigk",
    },
  });

  return (
    <div className='image'>
      {img.context.custom.starred === "true" && (
        <FontAwesomeIcon className='icon image__star' icon={faStar} />
      )}
      <AdvancedImage
        cldImg={cld
          .image(img.public_id)
          .resize(thumbnail().width(300).height(300))}
      />
    </div>
  );
};

export default Image;
