import React from 'react';
import './App.css';
import Header from './Header';
import FoodList from './FoodList';
import FoodDetail from './FoodDetail';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route path="/" element={<FoodList />} />
      <Route path="/foods/:id" element={<FoodDetail />} />
    </Routes>
    </>
  );
}

export default App;