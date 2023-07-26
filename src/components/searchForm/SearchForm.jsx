import React, { useState } from "react";

const SearchForm = ({onSearchByName, onSearchByIngredient}) => {
    const [searchItem, setSearchItem] = useState("");

    const handleSearchByName = () => {
        if (searchItem.trim() !== "") {
            onSearchByName(searchItem);
        }
    };

    const handleSearchByIngredient = () => {
        if (searchItem.trim() !=="") {
            onSearchByIngredient(searchItem);
        }
    };

    return(<div>
        <h2>What's on yor fridge?</h2>
            <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Enter recipe name or ingredient"
            />
            <button onClick={handleSearchByName}>Search by name</button>
            <button onClick={handleSearchByIngredient}>Search by Ingredient</button>        
        </div>
    )
}

export default SearchForm;