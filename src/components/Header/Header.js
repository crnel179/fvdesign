import { Fragment, useState } from 'react';
import Content from '../Content/Content';
import '../Header/Header.css';

const Header = (text) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment className='header'>
            <section className='toggle' onClick={() => setIsOpen(!isOpen)}>
                {text.label}
            </section>
            {isOpen && <Content />}
        </Fragment>
    );
};

export default Header;
