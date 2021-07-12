import React from "react";
import { Counter } from "./components/Counter";
import { CounterHook } from "./components/CounterHook";
import { Login } from "./components/Login";
//import { Functions } from './typescript/Functions'
//import { ObjectsLiterals } from './typescript/ObjectsLiterals'
//import { TypeBasics } from './typescript/TypeBasics'

const App = () => {
  return (
    <div className="mt-2">
      <h1>Intro typescript</h1>
      <hr />
      {/* <TypeBasics/> */}
      {/* <ObjectsLiterals/> */}
      {/*  <Functions/> */}
      {/*  <Counter/> */}
      {/* <CounterHook /> */}
      <Login/>
    </div>
  );
};

export default App;
