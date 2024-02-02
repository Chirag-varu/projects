import React from 'react';
import './App.css';
import {DialogBasicExample} from './Component/FirstComponent/DialogBasicExample';
import {Login} from './Component/FirstComponent/login';
// import login from "./Component/FirstComponent/login";


function App() {
  return (
    <div className="App">
      <>
        {/* <DialogBasicExample/> */}
        <Login/>
      </>
    </div>
  );
}

export default App;
