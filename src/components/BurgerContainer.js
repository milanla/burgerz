import React, { Component } from 'react';
import BurgerList from './BurgerList'
import BurgerFilter from './BurgerFilter'

export default class BurgerContainer extends Component {

  render(){
    return (
      <div className="BurgerContainer">
        <BurgerFilter
          burgerObj={this.props.burgerz}
          filterBurger={this.props.filterBurger}/>
        <BurgerList
          showBurger={this.props.showBurger} deleteBurger={this.props.deleteBurger}
          burgerObj={this.props.burgerz}/>
      </div>
    )
  }
}
