import React, { Component } from 'react';

const BurgerDisplay = (props) => {
  return (
    <div className="BurgerDisplay">
      <img src={props.burgerz.imgURL}/>
      <br/>
      <h1>{props.burgerz.name}</h1>
      <br/>
      <select onChange={(e) => props.changeCategory(e, props.burgerz)}>
        <option value="Relatable">Relatable</option>
        <option value="Bougie">Bougie</option>
      </select>
    </div>
  )
}

export default BurgerDisplay
