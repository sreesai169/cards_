import React from "react";
import Profile from "./profile.jpg";
import "./App.css";
// import Hello from "./Hello"
// import Wish from "./Wish"
// import Home from "./Home"

//import Greeting from "./components/Greeting";
//import Welcome from "./components/Welcome";
//import States from "./components/states";
//import ClassState from "./components/ClassState";
//import Hooks from "./components/Hooks";
import data from "./data/data.json";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

let Home = () => {
  let profile = data.profiles;
  console.log(profile);
  return (
    <div className="row justify-content-center">
      {profile.map((value, index) => (
        <div className="col-sm-10 col-md-4 col-lg-4 mt-1" key={index}>
          <div className="card">
            <div className="card-body">
              <img src={Profile} style={{ width: "200px", height: "200px" }} />
              <h2>{value.basic.name}</h2>
              <h3>{value.basic.role}</h3>
              <h4>
                <a href="tel:8919791594">{value.basic.Phone}</a>
              </h4>
              <p>
                <a href="mailto:sreesai169@gmail.com">{value.basic.email}</a>
              </p>

              <h2 className="btn btn-primary">Profile</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default App;
