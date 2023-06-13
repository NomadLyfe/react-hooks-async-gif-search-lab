import React, { useState, useEffect} from "react";
import GifList from "./GifList";
import GifSearch from "./GifSearch";

function GifListContainer() {
    const [gifs, setGifs] = useState(null);

    useEffect(() => {
      fetch("https://api.giphy.com/v1/gifs/search?api_key=99bKGccRrXVTd3CZo8jems3NMPQqXYGf&q=dolphin&rating=g&limit=3&lang=en")
      .then(r => r.json())
      .then(data => setGifs(data.data));
    }, [])

    function handleSearch(data) {
        setGifs(data);
    }
  
    if (!gifs) return <p>Loading...</p>;

    return (
        <div>
            <GifList gifs={gifs} />
            <GifSearch onSubmit={handleSearch} />
        </div>
    )
}

export default GifListContainer;