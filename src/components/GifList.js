import React from "react";

function GifList({ gifs }) {
    const gifList = gifs.map(gif => {
        return(
            <li><img key={gif.id} src={gif.images.original.url} /></li>
        )
    })
    return (
        <ul style={{float: "left"}}>
            {gifList}
        </ul>
    )
}

export default GifList;