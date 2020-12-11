import React from 'react'
import { fetchData, getImgUrl } from '../../helperFunctions';

function Box({category, subCategory, updateContent}) {
    const handleClick = async e => {
        const data = await fetchData[category](subCategory);
        updateContent(data, category);
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
