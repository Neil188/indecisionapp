import React from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';

const OptionModal = ({selectedOption, handleClearSelectedOption}) => (
    <Modal
        isOpen={!!selectedOption}
        contentLabel="Selected Option"
        appElement={document.getElementById('app')}
        onRequestClose={handleClearSelectedOption}
        closeTimeoutMS={200}
    >
        <h3>Selected Option</h3>
        {selectedOption && <p>{selectedOption}</p>}
        <button onClick={handleClearSelectedOption} >Okay</button>
    </Modal>
);

OptionModal.defaultProps = {
    selectedOption: undefined,
}

OptionModal.propTypes = {
    selectedOption: PropTypes.string,
    handleClearSelectedOption: PropTypes.func.isRequired,
}

export default OptionModal;