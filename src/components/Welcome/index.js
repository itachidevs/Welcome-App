// Write your code here
import {Component} from 'react'

import './index.css'

class Welcome extends Component {
  state = {isSubscribed: false, name: 'Subscribe'}

  onFalseChange = () => {
    const {isSubscribed} = this.state
    if (isSubscribed === true) {
      this.setState(() => ({isSubscribed: false, name: 'Subscribe'}))
    } else {
      this.setState(() => ({isSubscribed: true, name: 'Subscribed'}))
    }
  }

  render() {
    const {name} = this.state
    return (
      <div className="container">
        <h1 className="heading">Welcome</h1>
        <p className="greeting">Thank you! Happy Learning</p>
        <button className="btn" type="button" onClick={this.onFalseChange}>
          {name}
        </button>
      </div>
    )
  }
}
export default Welcome
