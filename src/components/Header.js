import React, { Component } from 'react';
import styles from './App.css';
export default class Header extends Component {
  render() {
    return (
      <header className={ styles.Header }>
        <h1>MadLibs</h1>
      </header>
    );
  }
}
