import React, { Component } from 'react';
import Form from './Form';
import Result from './Result';

export default class Madlib extends Component{
  state = {
    showResult: false
  }

  toggleResult = () =>
    this.setState(state => ({ ...state, showResult: !state.showResult }));

  handleSubmit = event => {
    event.preventDefault();
    this.toggleResult();
  }

  render() {
    const { showResult } = this.state;
    return (
      <>
        {!showResult && <Form onSubmit={this.handleSubmit} />}
        {showResult && <Result words={[]} closeResult={this.toggleResult} />}
      </>
    );
  }
}
