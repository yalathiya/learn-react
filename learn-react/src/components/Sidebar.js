import React from "react";
import {Link} from "react-router-dom"
import articleList from "../assets/articleList.json"

function Sidebar({selectedCategory, onTitleChange}){
    const filteredArticles = articleList.filter(
        article => article.category == selectedCategory
    )
    return(
        <>
            {filteredArticles.map(article => (
                <Link to={`/${article.category}/${article.title}`}>  
                <button key={article.title}
                        onClick={() => onTitleChange(article.title)}
                >{article.title }</button>
                </Link>
            ))}
        </>
    )
}

export default Sidebar