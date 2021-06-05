import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import LoginScreen from './screens/LoginScreen';
const user = null;

function App() {

  return (
    <div className="app">
           <Router>
             {!user ?(
               <LoginScreen/>
             ):(
              <Switch>
              <Route exact path="/">
                <HomeScreen />
              </Route>
            </Switch>
             )}
        
    </Router>
    </div>
  );
}

export default App;
