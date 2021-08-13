import React, { useReducer } from "react";
import './index.css'


const initialState = 0;
const reducer = (state, action) => {
  console.log(action);
  if(action.type === "inc"){
    return state+1;
  }
  if(action.type === "dec"){
    return state-1;
  }
  return state
}
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
      <div>
        <p>{state}</p>
        <div className="btnStylePosition">
          <button onClick={() => dispatch({type: "inc"})}>Inc</button>
          <button onClick={() => dispatch({type: "dec"})}>Dec</button>
        </div>
      </div>
    </>
  );
};

export default App;
