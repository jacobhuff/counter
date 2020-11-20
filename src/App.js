import React, { Component } from 'react'
import Buttons from './components/Buttons'

class App extends Component {
  state = {
    count: 0
  }
  increment = (e) => {
    this.setState({
      count: this.state.count + 1
    })
  }
  decrement = (e) => {
    this.setState({
      count: this.state.count - 1
    })
  }
  clear = (e) => {
    this.setState({
      count: 0
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({
      count: parseInt(e.target.customNumber.value)
    })
    e.target.customNumber.value = ''
  }
  render() {
    return (
      <div className='container'>
        <h1 className='count'>{this.state.count}</h1>
        <Buttons increment={this.increment} decrement={this.decrement} handleSubmit={this.handleSubmit} clear={this.clear} />
      </div>
    )
  }
}

export default App