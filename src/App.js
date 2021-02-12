import logo from './logo.svg';
import './App.css';
import {Route,Switch, BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar/navbar';
import Groceries from './components/Groceries/groceries';
import ToDos from './components/ToDos/todos';
import Events from './components/Events/events';
import Bills from './components/Bills/bills';
import Home from './components/Home';
import Location from './components/Location/location';
import Register from './components/SignUp/familysignup';
import SignupForm from './components/SignUp/signup';


import React, { Fragment, useEffect } from 'react';
import store from './store';
import { Provider } from 'react-redux';
import { loadUser } from './store/actions/auth';
import PrivateRoute from './store/utils/privateroute'


function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
      <Provider store={store}>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route exact path='/' component = {Home} />
          <Route exact path='/groceries' component = {Groceries} />
          <Route exact path='/todos' component = {ToDos} />
          <Route exact path='/events' component = {Events} />
          <Route exact path='/bills' component = {Bills} />
          <Route exact path='/location' component = {Location} />
          <Route exact path='/register' component = {Register} />
          <Route esact path='/signup' component ={SignupForm} />
        </Switch>
      </BrowserRouter>
      </Provider>
  );
}

export default App;
