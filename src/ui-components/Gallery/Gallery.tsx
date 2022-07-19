import React, { FC } from "react";
import { GalleryProps } from "./Gallery.types";
import { ReactComponent as RemoveLogo } from "../../assets/Remove.svg";

import "./Gallery.styles.scss";

const Gallery: FC<GalleryProps> = ({ images, onRemove }) => {
  const thumbs = images.map((image) => (
    <div key={image.filepath}>
      <div className="thumb">
        <div className="thumb__inner">
          <img alt={image.name} src={image.thumbpath} className="thumb__img" />
        </div>
        <div className="thumb__remove" onClick={() => onRemove(image.name)}>
          <RemoveLogo />
        </div>
      </div>
      <p className="thumb__name">{image.name}</p>
    </div>
  ));

  return (
    <section className="photo">
      <aside className="photo__container">
        <div className="photo__row">{thumbs}</div>
      </aside>
    </section>
  );
};

export default Gallery;
