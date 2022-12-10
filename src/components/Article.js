import React from "react";

function RenderArticle ({title, date, preview}) {
    return (
        <article key={title}>
            <h3>{title}</h3>
            {date ? <small>{date}</small> : <small>January 1, 1970</small>}
            <p>{preview}</p>
        </article>
    )
}

export default RenderArticle