
import './App.css';
import Nav from './compoment/Nav';
import TableList from './compoment/TableList';
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Edit from './compoment/Edit';

function App() {
  return (
    <div className="App">
      {/* <Nav />
      <TableList /> */}

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<TableList />} />
            <Route path="/edit/:id" element={<Edit />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
