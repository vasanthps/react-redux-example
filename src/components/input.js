import React from 'react';

const Input = ({
  type,
  placeholder,
  fieldDefinition,
}) => (
  <input
    className="block col-12 mb1 input"
    type={ type }
    placeholder={ placeholder }
    { ...fieldDefinition } />
);

Input.propTypes = {
  type: React.PropTypes.string,
  placeholder: React.PropTypes.string,
  fieldDefinition: React.PropTypes.object.isRequired,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};

export default Input;
