import { React, useState } from "react";
import { Products } from "./db/Productsdata";
import "./Searchbar.css";

function SearchBar() {
    const [query, setQuery] =  useState("");
    const keys = ["name","categorie"]
return (
    <div className="search">
        <label htmlFor="header-search">
            <span className="visually-hidden">Search in Mozar</span>
        </label>
        <input
            type="text"
            className="searchinput"
            id="header-search"
            placeholder="Search in Mozar"
            name="s" 
            onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
    </div>
);
}
 
export default SearchBar;