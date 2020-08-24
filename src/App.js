import React, {Component} from "react";
import './App.css';
import MyComp from "./components/mycomp.js/mycomp";
import logo from "./image/mypic.jpg";


export default class App extends Component{
  render(){
  return (
      <div className="App">
        <img src={logo} alt="Mypic" width="200"/>
        <MyComp/>
      </div>
  )
}
}

