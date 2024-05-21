import React from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom'
import { useState } from "react";
import Navbar from "./components/Navbar.js"
import Sidebar from './components/Sidebar.js';

function App() {

  // state of category
 const [selectedCategory, setSelectedCategory] = useState(null);

 const [selectedTitle, setSelectedTitle] = useState(null);

 const handleCategoryChange = (category) => {
    setSelectedCategory(category);
 }

 const handleTitleChange = (title) => {
    setSelectedTitle(title);
 }


  return (
    <>
    <BrowserRouter>
      {<Navbar 
        selectedCategory ={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />}
      <br></br>
      {<Sidebar 
        selectedCategory = {selectedCategory}
        onTitleChange={handleTitleChange}
      />}
     <Routes>
      <Route path ="/:category" element = {<Display />}/>
      <Route path ="/:category/:title" element = {<Display />}/>
     </Routes>
      
      {/* {selectedCategory && (
        <div>
          <h1> selected category : {selectedCategory} </h1>
        </div>
      )} */}
      </BrowserRouter>
    </>
  );
}

function Display(){
  let {category} = useParams();
  let {title} = useParams();
  return(
    <>
      <div>
          <h1> selected category : {category} </h1>
          <h1> selected title : {title} </h1>
        </div>
    </>
  )
}
export default App;
