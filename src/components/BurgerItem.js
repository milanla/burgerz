import React, { Component } from 'react';

const BurgerItem = (props) => {

  return (
    <div>
      <div className="BurgerItem">
        <h3>{props.obj.name}</h3>
      </div>
      <div className="BurgerBottomBun">
        <button onClick={(e) => props.showBurger(e, props.obj)}>Show</button>
        <button onClick={(e) => props.deleteBurger(e, props.obj)}>Delete</button>
      </div>
    </div>
  )
}

export default BurgerItem
