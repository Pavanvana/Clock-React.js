import {Component} from 'react'
import './index.css'

class Clock extends Component {
  state = {date: new Date()}

  componentDidMount() {
    console.log('componentDidMount called')
    this.timerId = setInterval(() => {
      this.setState({date: new Date()})
    }, 1000)
  }

  componentWillUnmount = () => {
    console.log('componentWillUnMount called')
    clearInterval(this.timerId)
  }

  render() {
    const {date} = this.state
    console.log('render Called', date)
    return (
      <div className="clock-container">
        <h1 className="heading">Clock</h1>
        <p className="time">{date.toLocaleTimeString()}</p>
      </div>
    )
  }
}
export default Clock
