import React, {useEffect} from 'react';
import axios from "axios";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  useEffect(()=>{
    axios.get("/api/config")
    .then((response)=>{
      console.log(response.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }, [])
 
  return (
    <div>
      <h1>Hello World.</h1>
    </div>
  );
}

export default App;
