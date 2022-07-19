import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    
    return (
        <div>
            Страница не найдена или находится на этапе разработки. Вернуться на <Link to='/'>домашнюю страницу</Link>
        </div>
    );
};

export default NotFound;