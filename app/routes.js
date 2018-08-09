/**
 * 
 */
import React from 'react'
import { Route, Switch } from 'react-router'

const routes = (
  <div>
    <NavBar />
    <Switch>
      <Route exact path="/" render={<div>hello</div>} />
      <Route exact path="/jeff" render={<div>hello jeff</div>} />
    </Switch>
  </div>
)

export default routes