import logo from './logo.svg';
import './App.css';
import {Route,Switch, BrowserRouter} from 'react-router-dom'
import NavBar from './components/Navbar/navbar';
import Groceries from './components/Groceries/groceries';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={NavBar} />
          <Route exact path='/groceries' component = {Groceries} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
