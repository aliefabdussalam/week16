import React from 'react'
import { Switch, Route, Redirect} from 'react-router-dom'
import Home from '../pages/home'
import Product from '../pages/product'
import Login from '../pages/login'
import Signup from '../pages/signup'
import Details from '../pages/details'
import Edit from '../pages/editprd'
import Add from '../pages/addprd'

import Guard from './Guard'

const Router = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <Home />
      </Route>
      <Guard path="/product" component={Product} />
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/signup">
        <Signup />
      </Route>
      <Guard path="/details/:id" component={Details} />
      <Guard path='/edit/:id' component={Edit} />
      <Guard path='/add/:id' component={Add} />
    </Switch>
  )
}

export default Router