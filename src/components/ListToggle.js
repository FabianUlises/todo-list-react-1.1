import React from 'react'

const ListToggle = ({ setStatus }) => {
  // Hanlder function for select options
  const handleChange = (e) => {
    // Updating status state
    setStatus(e.target.value);
  };
  return (
    <select onChange={(e) => handleChange(e)} name='todos'>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
    </select>
  );
};

export default ListToggle;