import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import MainScreen from "./screens/MainScreen";

function App() {


  // useEffect(()=>{
  //   fetch("http://localhost:8080/access")
  //       .then((res)=>{
  //         return res.json();
  //       })
  //       .then((data)=>{
  //         setMessage(data);
  //       });
  // },[]);
  // console.log(message);


  return (
    <div className="App">
        <MainScreen />
    </div>
  );
}

export default App;
