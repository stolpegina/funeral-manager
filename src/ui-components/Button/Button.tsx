import React, { FC } from 'react';
import './Button.styles.scss';

interface Props { 
    name: string;
}

const Button: FC<Props> = ({name}) => {
    return (
        <div>
            <button className='button'>{name}</button>
        </div>
    );
};

export default Button;