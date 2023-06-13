import React, { useState } from "react";

function GifSearch({ onSubmit }) {
    const [search, setSearch] = useState('dolphin');
    
    function handleChange(e) {
        setSearch(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?api_key=99bKGccRrXVTd3CZo8jems3NMPQqXYGf&q=${search}&rating=g&limit=3&lang=en`)
        .then(r => r.json())
        .then(data => onSubmit(data.data));
    }

    return (
        <form onSubmit={handleSubmit} style={{float: "right", width: "500px"}}>
            <label>Enter a Search Term:</label><br />
            <input type="text" value={search} onChange={handleChange} /><br />
            <button>Find Gifs</button>
        </form>
    )
}

export default GifSearch;