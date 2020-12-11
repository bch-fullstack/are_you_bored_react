import React from 'react'
import Box from './Box'

function Row({ category, subCategories, updateContent }) {
    return (
        <div>
            <h2>{category}</h2>

            {
                subCategories.map((subCategory, i) => <Box key={i}
                                                        category={category}
                                                        subCategory={subCategory}
                                                        updateContent={updateContent}/>)
            }
        </div>
    )
}

export default Row
