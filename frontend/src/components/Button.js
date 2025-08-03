import React from 'react';
import './Button.css';

function Button({ 
  children, 
  type = 'button', 
  variant = 'primary', 
  disabled = false, 
  loading = false,
  onClick,
  ...props 
}) {
  return (
    <button
      type={type}
      className={`btn btn-${variant} ${disabled || loading ? 'btn-disabled' : ''}`}
      disabled={disabled || loading}
      onClick={onClick}
      {...props}
    >
      {loading ? 'Loading...' : children}
    </button>
  );
}

export default Button;
