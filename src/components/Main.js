import React, { useState } from "react";
import data from "../data";
import { DisplayNumber } from "./DisplayNumber";

export const displayNumberContext = React.createContext();

export const Main = () => {

  let dataLength = data.length;

const [count, setcount] = useState(0);
const [users, setusers] = useState([])
    

const deleteUser = () => {
        setusers(prevState => {
            return prevState.filter(user => user !== users[index])
        })
    }

const handleEvent = (e) => {
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

  return (
    <div id="main">
      <displayNumberContext.Provider value={{count, dataLength}}>
        <DisplayNumber />
      </displayNumberContext.Provider>
      <div className="usercard-data"></div>

      <br />
      <div id="previous-card-btn">
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

        <button onClick={handleEventBack}>Back</button>
      </div>
      <div id="next-card-btn">
        <button onClick={(e) => {handleEvent(e)}}> Next</button>
      </div>
      <div>
        <button onClick={deleteUser}>DELETE</button>
      </div>
    </div>
  );
};
