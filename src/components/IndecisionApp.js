import React, { Component } from 'react';
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';

export default class IndecisionApp extends Component {
    state = {
        options: [],
        selectedOption: undefined,
    }
    
    componentDidMount = () => {
        try {
            const options = JSON.parse(localStorage.getItem('options'));

            if (options) {
                this.setState( () => ({ options }) );
            }
        } catch (e) {
            // do nothing
        }
    }

    componentDidUpdate = (prevProps, { options: prevOptions }) => {
        const { options } = this.state;

        if (prevOptions.length !== options.length) {
            const json = JSON.stringify(options);
            localStorage.setItem('options', json);
        }
    }
    
    handleDeleteOptions = () => {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption = (optionToRemove) => {
        const excludeOption = (remove => opt => remove !== opt)(optionToRemove);
        this.setState(prevState => ({
            options: prevState.options.filter(excludeOption),
        }));
    }

    handlePick = () => {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState( () => ({
            selectedOption: option,
        }))
    }

    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add item';
        }
        if (this.state.options.indexOf(option) > -1) {
            return 'This option already exists';
        }
        this.setState(prevState => ({ options: [...prevState.options, option] }));
        return undefined;
    }

    handleClearSelectedOption = () => {
        this.setState( () => ({
            selectedOption: undefined,
        }))
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className='container'>
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className='widget'>
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleClearSelectedOption={this.handleClearSelectedOption}
                />
            </div>
        );
    }
}
