import React, { FC } from "react";
import Gallery from "../../../../ui-components/Gallery/Gallery";
import Dropzone from "../../../../ui-components/Dropzone/Dropzone";

import { PhotosProps } from "./Photos.types";

const Photos: FC<PhotosProps> = ({ images, onUpload, onRemove }) => {
  return (
    <>
      <h3 className="detailed-info__section-title">ПРИЛОЖЕННЫЕ ФОТО</h3>
      <Gallery images={images} onRemove={onRemove} />
      <Dropzone onUpload={onUpload} />
    </>
  );
};

export default Photos;
