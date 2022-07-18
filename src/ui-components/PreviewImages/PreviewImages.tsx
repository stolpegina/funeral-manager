import React, { FC } from "react";
import { PreviewImagesProps } from "./PreviewImages.types";

import "./PreviewImages.styles.scss";

const thumbInner = {
  display: "flex",
  minWidth: 0,
  overflow: "hidden",
};

const img = {
  display: "block",
  width: "auto",
  height: "100%",
};

// TODO: Rename to Gallery
const PreviewImages: FC<PreviewImagesProps> = ({ images, onRemove }) => {
  const thumbs = images.map((image) => (
    <div className="thumb" key={image.filepath}>
      <div style={thumbInner}>
        <img alt={image.name} src={image.thumbpath} style={img} />
      </div>
      <div onClick={() => onRemove(image.name)}>Remove</div>
    </div>
  ));

  return (
    <section className="container">
      <aside className="thumbsContainer">
        <div>{thumbs}</div>
      </aside>
    </section>
  );
};

export default PreviewImages;
