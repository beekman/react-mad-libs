import React, { Component } from 'react';
import styles from './App.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.Footer }>
        <section className={ styles.about }>
          This MadLibs project was created by Ben Beekman.
        </section>
      </footer>
    );
  }
}
