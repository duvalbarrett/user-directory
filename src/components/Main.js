import React, { useState } from "react";
import data from "../data";
import { DisplayNumber } from "./DisplayNumber";
import { RegisterForm } from "./RegisterForm";
// import {Route, Routes} from 'react-router-dom'

export const displayNumberContext = React.createContext();

export const Main = ({data}) => {
  let dataLength = data.length;

  const [count, setcount] = useState(0)
  const [toggle, settoggle] = useState(true)

  
  const handleEventFwd = (e) => {
    if (count === data.length - 1) {
      alert("What more do you want from me?");
    }
    setcount((prevCount) => prevCount + 1);
  };

  const handleEventBack = (e) => {
    if (count === 0) {
      alert("Never go back");
    } else {
      setcount((prevCount) => prevCount - 1);
    }
  };

  const deleteHandler = () => {
    data.splice(count, 1)
    // count <= data.length - 1 ? setcount(count - 1) : setcount(count + 1)
    // console.log('After splice,', data)
    settoggle(!toggle)
  }

  const newUserHandler = () => {

  }



  return (
  
    <div id="outer-layer">
      <div id="top-display-number">
        <displayNumberContext.Provider value={{ count, dataLength }}>
          <DisplayNumber />
        </displayNumberContext.Provider>
      </div>

      <br />
      <div id="user-card-info">
        <h1>
          {data[count].name.first} {"" + data[count].name.last}
        </h1>
        <h2>
          From: {data[count].city}, {"" + data[count].country}
        </h2>
        <h2>Job Title: {data[count].title}</h2>
        <h2>Employer: {data[count].employer}</h2>
        <h2>
          Favorite Movies:
          <ol type="1">
            <li>{data[count].favoriteMovies[0]}</li>
            <li>{data[count].favoriteMovies[1]}</li>
            <li>{data[count].favoriteMovies[2]}</li>
          </ol>
        </h2>
      </div>
      <div id="previous-card-btn">
        <button onClick={handleEventBack}>Back</button>
      </div>
      <div id='delete-btn'>
        <button onClick={deleteHandler}>Delete</button>
      </div>
      <div id='newuser-btn'>
        <button onClick={newUserHandler}>New</button>
      </div>
      <div id="next-card-btn">
        <button onClick={handleEventFwd}>Next</button>
      </div>
      <RegisterForm data={data} />
      
      
      {/* <div>
        <Route>
          <Route path='/register' component={RegisterForm} />
        </Route>
      </div> */}
    </div>

  );
};
