import React, { Component, Fragment } from 'react';
import Tile from '../components/Tile'
import { fetchCountries } from '../api/countries'

class CountriesContainer extends Component {
  constructor(props) {
    super(props)

    this.state={
      countries: []
    }
  }

  componentDidMount() {
    fetchCountries()
    .then(data => this.setState({
      countries: data
    }))
  }

  render() {
    let countries = this.state.countries.map(c => {
      return <Tile name={c} />
    })
    return (
      <Fragment>
        <h1 className="heading">Countries</h1>
        <div className="tiles">{countries}</div>
      </Fragment>
    )
  }
}

export default CountriesContainer;
