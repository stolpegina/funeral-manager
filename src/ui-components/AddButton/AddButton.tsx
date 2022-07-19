import React, { FC } from 'react';

import { AddButtonProps } from './AddButton.types';

import "./AddButton.styles.scss";

const Button: FC<AddButtonProps> = ({ name, onClick }) => {
  return (
    <div>
      <button className="add-button" onClick={onClick}>
        <div className="add-button__plus">+</div>
        <div className="add-button__text">{name}</div>
      </button>
    </div>
  );
};

export default Button;