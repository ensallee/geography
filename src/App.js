import React, { Component, Fragment } from 'react'
import { Switch, Route } from 'react-router-dom'
import Nav from './components/Nav/Nav'
import CountriesContainer from './containers/CountriesContainer';
import StatesContainer from './containers/StatesContainer'
import Home from './components/Home'

class App extends Component {
  render() {
    return (
      <Fragment>
        <h1 className="heading heading--main">States and Countries</h1>
        <Nav />
        <Switch>
          <Route exact path ="/" component={(props) => <Home {...props}/>} />
          <Route exact path="/countries" component={(props) => <CountriesContainer {...props}/>} />
          <Route exact path="/states" component={(props) => <StatesContainer {...props}/>} />
        </Switch>
      </Fragment>
    )
  }
}
export default App
