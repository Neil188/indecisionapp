import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ title, subTitle }) => (
    <div>
        <div>
            <h1>{title}</h1>
            {subTitle && <h2>{subTitle}</h2>}
        </div>
    </div>
);

Header.defaultProps = {
    title: 'Indecision',
    subTitle: '',
};

Header.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};

export default Header;