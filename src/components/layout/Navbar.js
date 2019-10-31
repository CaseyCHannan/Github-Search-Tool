import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({icon, title}) =>  {
    
    return (
        <nav className='bg-primary'>
            <i className={icon}></i>
            {title}
        </nav>
    );

}

Navbar.defaultProps = {
    title: ' Github finder',
    icon: 'fab fa-github'
}
Navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired       
}

export default Navbar;
