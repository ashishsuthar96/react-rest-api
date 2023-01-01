import './App.css';
import AddBook from './component/AddBook';
import Home from './component/Home';
import Nav from './component/Nav';
import Upload from './component/Upload';
import { BrowserRouter  as Router, Routes, Route } from "react-router-dom";
import UpdateBook from './component/UpdateBook';
import {ToastContainer} from 'react-toastify'
import { useState } from 'react';

function App() {

  const [mode, setMode]= useState('light');
  const toggle=()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      document.body.style.color='white'
    }else 
      {
        setMode('light');
      document.body.style.backgroundColor='white';
      document.body.style.color='black'
    }

  }

  return (
    <> 
   
    <Router>
      <Nav mode={mode} toggle={toggle}/>
      <ToastContainer/>
      <Routes>
     
        <Route  exact path="/addbook" element={<AddBook />}> </Route>
        <Route exact path="/" element={<Home mode={mode} />} > </Route> 
        <Route exact path="/upload" element={<Upload  />} > </Route> 
        <Route  exact path="/updatebook" element={<UpdateBook />} > </Route> 

      </Routes>
    </Router> 
    </>
   


  );
}

export default App;
