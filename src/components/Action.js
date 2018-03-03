import React from 'react';
import PropTypes from 'prop-types';

const Action = ({ handlePick, hasOptions }) => (
    <div>
        <button
            onClick={handlePick}
            disabled={!hasOptions}
        >
                What should I do?
        </button>
    </div>
);

Action.propTypes = {
    handlePick: PropTypes.func.isRequired,
    hasOptions: PropTypes.bool.isRequired,
};

export default Action;