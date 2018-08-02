import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ optionText, handleDeleteOption, count }) => (
    <div className='option'>
        <p className='option__text'>{count}. {optionText}</p>

        <button
            className='button button--link'
            onClick={() => handleDeleteOption(optionText)}
        >
                remove
        </button>
    </div>
);

Option.propTypes = {
    optionText: PropTypes.string.isRequired,
    handleDeleteOption: PropTypes.func.isRequired,
    count: PropTypes.number.isRequired,
};

export default Option;
