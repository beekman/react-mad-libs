import React, { Component } from 'react';
import styles from '../App.css';
import Form from './Form';
import Result from './Result';

export default class Madlib extends Component {
  state = {
    showResult: false,
    words: [],
    inputs: {
      '0': '',
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '7': '',
      '8': '',
      '9': '',
      '10': '',
      '11': ''
    }

  };

  resetForm = () => {
    this.setState({
      showResult: false,
      words: [],
      inputs: {
        '0': '',
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '7': '',
        '8': '',
        '9': '',
        '10': '',
        '11': ''
      }
    });
  };
  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
    this.setState(state => ({
      words: [
        state.inputs['0'],
        state.inputs['1'],
        state.inputs['2'],
        state.inputs['3'],
        state.inputs['4'],
        state.inputs['5'],
        state.inputs['6'],
        state.inputs['7'],
        state.inputs['8'],
        state.inputs['9'],
        state.inputs['10'],
        state.inputs['11']
      ]
    }));
  };

  handleChange = ({ target }) => {
    this.setState(prevState => ({
      ...prevState,
      inputs: {
        ...prevState.inputs,
        [target.name]: target.value
      }
    }));
  };

  render() {
    const { showResult, words } = this.state;
    return (
      <>
        <div className={ styles.mad }>
          { !showResult && <Form onSubmit={ this.handleSubmit } onChange={ this.handleChange } onReset={ this.resetForm } inputs={this.state.inputs} /> }
          { showResult && <Result words={ words } closeResult={ this.toggleResult } /> }
        </div>
      </>
    );
  }
}
