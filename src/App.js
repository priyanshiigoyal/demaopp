import './App.css';
import SignIn from './components/login';
import SignUp from './components/signup';
import VehicleList from './components/vehicleList'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Inspection from './components/Inspection/form'



function App() {

  
  return (
    <div className="App">
      <Router>
      
        <Route exact path="/" component={SignIn}/>
        <Route exact path="/signup" component={SignUp}/>
        <Route  exact path="/inspection" component={Inspection}/>
        
   
      </Router>
      
    </div>
  );
}

export default App;
