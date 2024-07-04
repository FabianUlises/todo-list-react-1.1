import React from 'react'

const ListToggle = () => {
  return (
    <select name='todos'>
        <option value='all'>All</option>
        <option value='completed'>Completed</option>
        <option value='uncompleted'>Uncompleted</option>
    </select>
  );
};

export default ListToggle;