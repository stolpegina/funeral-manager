import React, { FC } from "react";
import PreviewImages from "../../../../ui-components/PreviewImages/PreviewImages";
import Dropzone from "../../../../ui-components/Dropzone/Dropzone";

import { PhotosProps } from "./Photos.types";

const Photos: FC<PhotosProps> = ({ images, onUpload, onRemove }) => {
  return (
    <>
      <h3 className="detailed-info__section-title">ПРИЛОЖЕННЫЕ ФОТО</h3>
      <PreviewImages images={images} onRemove={onRemove} />
      <Dropzone onUpload={onUpload} />
    </>
  );
};

export default Photos;
