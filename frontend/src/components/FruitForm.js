import React, { useState, useEffect } from 'react';
import Button from './Button';
import './FruitForm.css';

const FruitForm = ({ currentFruit, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({ name: '', price: '', quantity: '', image: '' });

  useEffect(() => {
    if (currentFruit) {
      setFormData(currentFruit);
    }
  }, [currentFruit]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ name: '', price: '', quantity: '', image: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="fruit-form">
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Fruit Name"
        required
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price (per kg)"
        required
      />
      <input
        type="number"
        name="quantity"
        value={formData.quantity}
        onChange={handleChange}
        placeholder="Quantity (kg)"
        required
      />
      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        required
      />
      <Button type="submit">Submit</Button>
      <Button variant="secondary" onClick={onCancel}>Cancel</Button>
    </form>
  );
};

export default FruitForm;
