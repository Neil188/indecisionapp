import React from 'react';
import PropTypes from 'prop-types';
import Option from './Option';

const Options = ({ options, handleDeleteOptions, handleDeleteOption }) => (
    <div>
        <div className='widget-header'>
            <h3 className='widget-header__title'>Your Options</h3>
            <button
                className='button button--link'
                onClick={handleDeleteOptions}
            >
                Remove All
            </button>
        </div>
        {!options.length &&
            <p className='widget__message'>Please add an option to get started</p>}
        {
            options.map((opt, idx) => (
                <Option
                    key={opt}
                    optionText={opt}
                    count={idx + 1}
                    handleDeleteOption={handleDeleteOption}
                />
            ))
        }
    </div>
);

Options.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    handleDeleteOptions: PropTypes.func.isRequired,
    handleDeleteOption: PropTypes.func.isRequired,
}

export default Options;
