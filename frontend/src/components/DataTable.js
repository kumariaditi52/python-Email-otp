import React, { useState } from 'react';
import './DataTable.css';
import Button from './Button';

const DataTable = ({ data, onEdit, onDelete }) => {
  return (
    <table className="data-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>
              <Button variant="primary" onClick={() => onEdit(item)}>Edit</Button>
              <Button variant="secondary" onClick={() => onDelete(item)}>Delete</Button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
