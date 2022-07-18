import React, { FC } from "react";
import { useDropzone } from "react-dropzone";

import AddButton from "../AddButton/AddButton";

import { DropzoneProps } from "./Dropzone.types";

const Dropzone: FC<DropzoneProps> = ({ onUpload }) => {
  const { getRootProps, getInputProps, open } = useDropzone({
    accept: { "image/*": [] },
    onDrop: onUpload
  });

  return (
    <section className="container">
      <aside className="thumbsContainer"></aside>
      <div {...getRootProps({ className: "dropzone" })}>
        <input {...getInputProps()} />
        <AddButton name="ДОБАВИТЬ ИЗОБРАЖЕНИЕ" onClick={open} />
      </div>
    </section>
  );
};

export default Dropzone;
