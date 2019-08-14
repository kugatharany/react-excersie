import React from 'react';
import { BrowserRouter as Router} from "react-router-dom"
//import { createStackNavigator, createAppContainer } from 'react-navigation';


class Home extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                 <h1>Wel come to Home page</h1>
                    
                </Router>

            </div>
        );
    }
}
export default Home;

