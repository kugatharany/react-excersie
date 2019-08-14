import React from 'react';
import { BrowserRouter as Router } from "react-router-dom"
//import { createStackNavigator, createAppContainer } from 'react-navigation';
import './../App.css';

class Register extends React.Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <table >
                        <tr>
                            <td>Name</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td>Age</td>
                            <td><input type="textbox" /></td>
                        </tr>
                        <tr>
                            <td ><button type="button" >Back</button></td>
                            <td ><button type="button" >Next</button></td>

                        </tr>
                    </table> 

                </Router>

            </div>
        );
    }
}
export default Register;

