import logo from './logo.svg';
import './App.css';
import React, {useState, useEffect} from "react";
import NavigationBar from "./components/NavigationBar";
import BodyComponent from "./components/BodyComponent";

function App() {
  const [message, setMessage]=useState([]);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

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
  const login = () => {

  }
  const change_Id = event => {
      setId(event.target.value)
  }
  const change_Pw = event => {
      setPw(event.target.value)
  }
  return (
    <div className="App">
        <NavigationBar/>
        <BodyComponent/>
    </div>
  );
}

export default App;
