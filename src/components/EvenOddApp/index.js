import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  getRandomNo = Math.ceil(Math.random() * 100)

  onIncrement = () => {
    this.setState(prevState => ({count: prevState.count + this.getRandomNo}))
  }

  //    onIncrement = () => {
  //     const randomNo = this.getRandomNumber()
  //     this.setState(prevState => ({count: prevState.count + randomNo}))
  //   }

  render() {
    const {count} = this.state
    const displayText = count % 2 === 0 ? 'Even' : 'Odd'

    return (
      <div className="bg-container">
        <div className="inner-container">
          <h1 className="heading">Count {count}</h1>
          <p className="para">Count is {displayText}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}

export default EvenOddApp
