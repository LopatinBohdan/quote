import logo from './logo.svg';
import './App.css';
import React, {useState} from "react";

function Button(props){
  const BtnClick=()=>{
    props.onClickAct(props.newVal);
  }
  return(
    <button onClick={BtnClick}>Next Quote</button>
  );
}

function Quote(props){
  return(
    <div style={{width:"100px"}}>{props.quoteValue}</div>
  )
}

function App() {
  const arr=["quote1", "quote2", "quote3", "quote4"];
  let random=Math.floor(Math.random()*5);

  const[quoteValue, setQuoteValue]=useState("-1");

  const stateFunc=(random)=>{
    setQuoteValue(arr[random]);
  }

  return (
    <>
      <Button newVal={random} onClickAct={stateFunc}></Button>
      <Quote quoteValue={arr[random]}></Quote>
    </>
  );
}

export default App;
