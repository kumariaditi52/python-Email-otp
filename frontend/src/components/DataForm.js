import React, { useState, useEffect } from 'react';
import Button from './Button';
import './DataForm.css';

const DataForm = ({ currentData, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  useEffect(() => {
    if (currentData) {
      setFormData(currentData);
    }
  }, [currentData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', email: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="data-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <Button type="submit">Submit</Button>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
    </form>
  );
};

export default DataForm;
