
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";
import List from "../routes/List";
import Modify from "../routes/Modify";
import Page404 from "../routes/Page404";
import Header from "./Header";

function App() {
  
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/list" element={ <List />}/>
        <Route path="/detail" element={ <Detail />} />
        <Route path="/modify" element={ <Modify />} />
        <Route path="*" element={ <Page404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
