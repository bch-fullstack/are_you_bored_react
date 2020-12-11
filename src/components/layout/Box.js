import React from 'react'
import { BASE_IMG_URL } from '../../constants'

function Box({category, subCategory, updateContent}) {
    const getImgUrl = subCat => BASE_IMG_URL + subCat;

    const handleClick = e => {
        console.log(category);
        console.log(subCategory);
        updateContent(subCategory);
    };

    return (
        <div 
            className={`box ${subCategory.toLowerCase()}`} 
            onClick={handleClick}>

            <img className="im" alt="" src={getImgUrl(subCategory)} />
            <p className='par'>{subCategory}</p>
        </div>
    )
}

export default Box
