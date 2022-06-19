import { Fragment } from 'react';
import Header from '../Header/Header';
import '../Card/Card.css';

const Card = () => {
    return (
        <Fragment className='card'>
            <Header label='Step 1: Your details' />
            <Header label='Step 2: More comments' />
            <Header label='Step 3: Final comments' />
        </Fragment>
    );
};

export default Card;
