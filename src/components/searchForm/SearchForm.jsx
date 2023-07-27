import React, { useState } from "react";
import { Container } from "../../styles/Container";

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

    return(<Container>
        <h2>What's on your fridge?</h2>
            <input
            type="text"
            value={searchItem}
            onChange={(e) => setSearchItem(e.target.value)}
            placeholder="Enter recipe name or ingredient"
            />
            <div>
            <button onClick={handleSearchByName}>Search by name</button>
            <button onClick={handleSearchByIngredient}>Search by Ingredient</button>    
            </div>    
        </Container>
    )
}

export default SearchForm;