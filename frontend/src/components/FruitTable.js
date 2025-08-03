import React from 'react';
import './FruitTable.css';
import Button from './Button';

const FruitTable = ({ fruits, onEdit, onDelete }) => {
  return (
    <table className="fruit-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Price (per kg)</th>
          <th>Quantity (kg)</th>
          <th>Image</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {fruits.map((fruit, index) => (
          <tr key={index}>
            <td>{fruit.name}</td>
            <td>{fruit.price}</td>
            <td>{fruit.quantity}</td>
            <td>
              <img src={fruit.image} alt={fruit.name} style={{ width: '50px', height: '50px' }} />
            </td>
            <td>
              <Button variant="primary" onClick={() => onEdit(fruit)}>Edit</Button>
              <Button variant="secondary" onClick={() => onDelete(fruit)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default FruitTable;
