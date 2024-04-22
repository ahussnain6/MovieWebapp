import React from 'react';
import Navbar from "./components/Layout/components/Navbar.jsx";
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Signin from "./components/Authentication/components/Signin.jsx";
import Join from "./components/Pages/components/Join.jsx";
import MovieDetail from "./components/Movie/components/MovieDetail.jsx";
import Watch from "./components/Pages/components/Watch.jsx";
import Show from './components/Movie/components/Show.jsx';
import Search from './components/Pages/components/Search.jsx';
const App = () => {
  return (
    <>
     <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path='/' exact element={<Show />}></Route>
        <Route path='/signin' element={<Signin/>}></Route>
        <Route path='/join' element={<Join />}></Route>
        <Route path='/movie/:id' element={<MovieDetail />}></Route>
        <Route path='/watch/:id' element={<Watch />}></Route>
        <Route path='/search/:q' element={<Search />}></Route>
      </Routes>
     </ BrowserRouter>
     
    </>
  )
}

export default App;