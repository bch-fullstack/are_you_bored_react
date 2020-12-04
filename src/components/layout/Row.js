import React from 'react'

function Row({ title, img }) {
    return (
        <div>
            <h2>{title}</h2>
            <div className={`box ${title.toLowerCase()}`} >
                <img class="im" src={img[0]} />
                <p class='par'>Rock</p>
            </div>
            <div className={`box ${title.toLowerCase()}`} >
                <img class="im" src={img[1]} />
                <p class='par'>Chill</p>
            </div>
            <div className={`box ${title.toLowerCase()}`} >
                <img class="im" src={img[2]} />
                <p class='par'>Jazz</p>
            </div>
            <div className={`box ${title.toLowerCase()}`} >
                <img class="im" src={img[3]} />
                <p class='par'>Hiphop</p>
            </div>
        </div>
    )
}

export default Row
