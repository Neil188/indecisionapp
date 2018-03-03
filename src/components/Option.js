import React from 'react';
import PropTypes from 'prop-types';

const Option = ({ optionText, handleDeleteOption, count }) => (
    <div>
        <p>{count}. {optionText}</p>
        
        <button
            onClick={e => handleDeleteOption(optionText)}
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