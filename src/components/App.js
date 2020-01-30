import React, { Component } from 'react';
import Madlib from './madlib/Madlib';
import Header from './Header';
import Footer from './Footer';

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Madlib />
        <Footer />
      </>
    );
  }
}
