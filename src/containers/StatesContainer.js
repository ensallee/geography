import React, { Component, Fragment } from 'react';
import Tile from '../components/Tile'
import { fetchStates } from '../api/states'

class StatesContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      states: []
    }
  }

  componentDidMount() {
    fetchStates()
    .then(data => this.setState({
      states: data
    }))
  }

  render() {
    let states = this.state.states.map(s => {
      return <Tile name={s} />
    })
    return (
      <Fragment>
        <h1 className="heading">States</h1>
        <div className="tiles">{states}</div>
      </Fragment>
    )
  }
}

export default StatesContainer;
