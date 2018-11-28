import React, { Component } from 'react';
import BurgerItem from './BurgerItem'

const BurgerList = (props) => {
  let arrayOfBurgers = props.burgerObj.map(burger =>{
    return (
      <BurgerItem
        showBurger={props.showBurger}
        deleteBurger={props.deleteBurger}
        key={burger.id}
        obj={burger}/>
    )
  })
  return (
    <div className="BurgerList">
      {arrayOfBurgers}
    </div>
  )
}

export default BurgerList
