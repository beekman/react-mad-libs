import React, { Component } from 'react';
import styles from './App.css';
export default class Footer extends Component {
  render() {
    return (
      <footer className={ styles.Footer }>
        <section className={ styles.about }>
          This silly little React webapp was created by <a href="https://benbeekman.com">Ben Beekman</a>.
        </section>
      </footer>
    );
  }
}
