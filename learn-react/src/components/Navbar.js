import React from "react";
import articleList from "../assets/articleList.json"
import { Link } from 'react-router-dom'

function Navbar( {selectedCategory, onCategoryChange }){

 // Extract unique categories
 const categoryList = [...new Set(articleList.map(article => article.category))];

 return (
    <>
      {categoryList.map(category => (
        <Link to={`/${category}`}>       
        <button 
            key={category}
            onClick={() => onCategoryChange(category)}
        >
            {category}
        </button>    </Link>
 
      ))}
    </>
  );
}

export default Navbar;