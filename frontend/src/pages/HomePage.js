import React, { useState } from 'react';
import Button from '../components/Button';
import Card from '../components/Card';
import FruitTable from '../components/FruitTable';
import FruitForm from '../components/FruitForm';
import './HomePage.css';

function HomePage() {
  const [fruits, setFruits] = useState([]);
  const [currentFruit, setCurrentFruit] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = (newFruit) => {
    setFruits([...fruits, newFruit]);
  };

  const handleEdit = (fruit) => {
    setCurrentFruit(fruit);
    setIsEditing(true);
  };

  const handleUpdate = (updatedFruit) => {
    setFruits(fruits.map(fruit => (fruit.name === updatedFruit.name ? updatedFruit : fruit)));
    setIsEditing(false);
    setCurrentFruit(null);
  };

  const handleDelete = (fruit) => {
    setFruits(fruits.filter(f => f.name !== fruit.name));
  };

  const handleCancel = () => {
    setIsEditing(false);
    setCurrentFruit(null);
  };

  return (
    <div className="home-container">
      <h1>Fruit Management</h1>
      <Card title="Manage Your Fruits">
        {isEditing ? (
          <FruitForm currentFruit={currentFruit} onSubmit={handleUpdate} onCancel={handleCancel} />
        ) : (
          <FruitForm onSubmit={handleAdd} onCancel={handleCancel} />
        )}
        <FruitTable fruits={fruits} onEdit={handleEdit} onDelete={handleDelete} />
      </Card>
    </div>
  );
}

export default HomePage;
