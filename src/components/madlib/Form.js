import React from 'react';
import PropTypes from 'prop-types';

const Form = ({ onSubmit, onChange, onReset, inputs }) => (
  <>
    <form onSubmit={ onSubmit } onChange={ onChange }>
      <input type="text" name="0" placeholder="animal" value={ inputs['0'] } />
      <input type="text" name="1" placeholder="noun" value={ inputs['1'] } />
      <input type="text" name="2" placeholder="verb, past tense" value={ inputs['2'] } />
      <input type="text" name="3" placeholder="adverb" value={ inputs['3'] } />
      <input type="text" name="4" placeholder="adjective" value={ inputs['4'] } />
      <input type="text" name="5" placeholder="noun" value={ inputs['5'] } />
      <input type="text" name="6" placeholder="noun" value={ inputs['6'] } />
      <input type="text" name="7" placeholder="adjective" value={ inputs['7'] } />
      <input type="text" name="8" placeholder="verb" value={ inputs['8'] } />
      <input type="text" name="9" placeholder="adverb" value={ inputs['9'] } />
      <input type="text" name="10" placeholder="verb, past tense" value={ inputs['10'] } />
      <input type="text" name="11" placeholder="adjective" value={ inputs['11'] } />
      <button>Create Madlib</button>
    </form>
    <button onClick={ onReset }>Reset</button>
  </>
);

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  inputs: PropTypes.func.isRequired
};

export default Form;
