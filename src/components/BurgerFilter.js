import React, { Component } from 'react';

const BurgerFilter = (props) => {
  return (
    <div className="BurgerFilter">
      <select onChange={(e) => props.filterBurger(e)}>
        <option value="All">All</option>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerFilter
