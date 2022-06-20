import { Fragment } from 'react';
import Header from '../Header/Header';
import '../Card/Card.css';

const Card = () => {
    return (
        <div className='card'>
            <Header label='Step 1: Your details' />
            <Header label='Step 2: More comments' />
            <Header label='Step 3: Final comments' />
        </div>
    );
};

export default Card;
