import React, {Component} from 'react'

export default class BookingV2 extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return <div>
      {this.renderMain()}
    </div>
  }

  renderMain () {
    return <h1>BookingV2</h1>
  }
} 
