import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange }) => (
  <form onSubmit={ onSubmit } onChange={ onChange }>
    <input type="text" name="0" placeholder="animal" />
    <input type="text" name="1" placeholder="noun" />
    <input type="text" name="2" placeholder="verb, past tense" />
    <input type="text" name="3" placeholder="adverb" />
    <input type="text" name="4" placeholder="adjective" />
    <input type="text" name="5" placeholder="noun" />
    <input type="text" name="6" placeholder="noun" />
    <input type="text" name="7" placeholder="adjective" />
    <input type="text" name="8" placeholder="verb" />
    <input type="text" name="9" placeholder="adverb" />
    <input type="text" name="10" placeholder="verb, past tense" />
    <input type="text" name="11" placeholder="adjective" />
    <button>Create Madlib</button>
  </form>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired
};

export default Form;
