import React, { FC } from 'react';
import './AddButton.styles.scss';

interface Props { 
    name: string;
    onClick: () => void;
}

const Button: FC<Props> = ({ name, onClick }) => {
  return (
    <div>
      <button className="button" onClick={onClick}>
        <div className="button__plus">+</div>
        <div className="button__text">{name}</div>
      </button>
    </div>
  );
};

export default Button;