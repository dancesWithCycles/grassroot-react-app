import React from 'react'; 
//TODO import './App.css'; 
import Navbar from './navbar'; 
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'; 
import Home from './home'; 
import About from './about'; 
import Events from './events'; 
import AnnualReport from './annualReport'; 
import Teams from './teams'; 
import Blogs from './blogs'; 
import SignUp from './signUp'; 

function App() { 
return ( 
	<Router> 
	<Navbar /> 
	<Switch> 
		<Route path='/' exact component={Home} /> 
		<Route path='/about' component={About} /> 
		<Route path='/events' component={Events} /> 
		<Route path='/annual' component={AnnualReport} /> 
		<Route path='/team' component={Teams} /> 
		<Route path='/blogs' component={Blogs} /> 
		<Route path='/sign-up' component={SignUp} /> 
	</Switch> 
	</Router> 
); 
} 

export default App; 
