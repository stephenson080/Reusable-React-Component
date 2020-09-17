import React from 'react';
import logo from './logo.svg';
import './App.css';
import ReviewBox from './ReviewBox';

function App() {
//   const data = {
//     stephen: {
//       name: "stephen",
//       address: "owerri",
//       email: "test@test.com"
//     },
//     val: {
//       name: "val",
//       address: "enugu",
//       email: "val@test.com"
//     }  
//  }
  // const data = {
  //   name: "stephen",
  //   address: "owerri",
  //   email: "test@test.com"
  // }
  const data = [{
      name: "stephen",
      address: "owerri",
      email: "test@test.com"
    },
    {
        name: "val",
        address: "enugu",
        email: "val@test.com"
      }
  ]
  // const data = ["India", "Italy"]
  // const data = "Italy"
  return (
    <div className="App">
          <ReviewBox items= {data}/>
    </div>
  );
}

export default App;
