import React, { FC } from 'react';
import { ReactComponent as EditLogo } from "../../assets/Edit.svg";
import './EditButton.styles.scss';

interface iButton { 
    edit: () => void;
}

const EditButton: FC<iButton> = ({ edit }) => {
  return (
    <div>
      <button className='edit-button' onClick={() => edit()}>
        <EditLogo />
      </button>
    </div>
  );
};

export default EditButton;