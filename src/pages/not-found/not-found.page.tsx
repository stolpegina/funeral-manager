import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    return (
        <div>
            Нет такой страницы. Вернуться на <Link to='/'>доммашнюю страницу</Link>
        </div>
    );
};

export default NotFound;