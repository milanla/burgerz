import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import BurgerContainer from './components/BurgerContainer'
import BurgerDisplay from './components/BurgerDisplay'

class App extends Component {

  state = {
    burgerz: [],
    filter: '',
    displayedBurger: {}
  }

  componentDidMount() {
    fetch('http://localhost:3001/burgers')
    .then(res => res.json())
    .then(json => this.setState({
      burgerz: json
    }))
  }

  handleClick = (e, obj) => {
    this.setState({
      displayedBurger: obj
    })
  }

  handleDelete = (e, obj) => {
    this.setState({
      filteredBurgers: this.state.burgerz.filter(burger =>{
        return burger !== obj
      })
    })
    // console.log(obj)
    // fetch('http://localhost:3001/burgers/' + obj.id, {
    //   method: 'DELETE'
    // })
  }

  handleFilter = (e) => {
    this.setState({
      filter: e.target.value
    })
  }

  // forEach returns undefined
  handleCategoryChange = (e, obj) => {
    let copyArr = [...this.state.burgerz]
    copyArr.forEach(burger => {
      if (burger.id === obj.id) {
        burger.category = e.target.value
      }
    })
    this.setState({
      burgerz: copyArr
    })
    fetch('http://localhost:3001/burgers/' + obj.id, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        category: e.target.value
      })
    })
  }

  filterBurgers = () => {
    // if all then just return state
    if (this.state.filter === "All") {
      return this.state.burgerz
    } else {
      return this.state.burgerz.filter(burger => {
        return burger.category.includes(this.state.filter)
      })
    }
  }


  render() {
    return (
      <div id="App">
        <BurgerContainer
          showBurger={this.handleClick}
          deleteBurger={this.handleDelete}
          filterBurger={this.handleFilter}
          burgerz={this.filterBurgers()}/>
        <BurgerDisplay
          burgerz={this.state.displayedBurger}
          changeCategory={this.handleCategoryChange}/>
      </div>
    );
  }
}

export default App;
