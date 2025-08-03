import React from 'react';
import './Input.css';

function Input({ 
  label, 
  error, 
  type = 'text', 
  placeholder,
  value,
  onChange,
  required = false,
  ...props 
}) {
  return (
    <div className="input-group">
      {label && (
        <label className="input-label">
          {label} {required && <span className="required">*</span>}
        </label>
      )}
      <input
        type={type}
        className={`input-field ${error ? 'input-error' : ''}`}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        required={required}
        {...props}
      />
      {error && <span className="error-message">{error}</span>}
    </div>
  );
}

export default Input;
