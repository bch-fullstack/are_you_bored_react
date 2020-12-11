import React, { useState, useEffect } from 'react'

function Popup({ content, category }) {
    const [open, setOpen] = useState(false);

    const _getFormattedImageUrl = multimedia => multimedia ? multimedia[0].url : 'https://via.placeholder.com/200';

    useEffect(() => {
        if (content) {
            setOpen(true);
        }
    }, [content])

    return (
        <div className={`modal ${ open && 'show-modal'}`} id="modal">
			<div className="modal-content">
				<div className="modal-body" id="modal-body">
					{ category === 'books' && content.map(({ amazon_product_url, book_image, title, description }) => 
                        <div className="article article--books">
                            <a href={amazon_product_url}><img src={book_image} alt="" className="book-img"/></a>
                            <h4>
                                <a href={amazon_product_url} target="_blank" rel="noreferrer" className="title-link">{title}</a>
                            </h4>
                            <p class="book-desc">{description}</p>
                        </div>
                        )
                    }

                    { category === 'news' && content.map(({ url, multimedia, title }) =>
                        <div className="news-article">
                            <a href={url}>
                                <img src={_getFormattedImageUrl(multimedia)} alt="" className="news-img"/>
                            </a>
                            <h4>
                            <a href={url} target="_blank" rel="noreferrer" className="title-link">${title}</a>
                            </h4>
                        </div>
                    )}

                    { category === 'music' && content.map(({ amazon_product_url, book_image, title, description }) => 
                        <div className="article article--books">
                            <a href={amazon_product_url}><img src={book_image} alt="" className="book-img"/></a>
                            <h4>
                                <a href={amazon_product_url} target="_blank" rel="noreferrer" className="title-link">{title}</a>
                            </h4>
                            <p class="book-desc">{description}</p>
                        </div>
                        )
                    }
				</div>

				<div className="my-modal-footer">
                        
                    <button 
                        type="button" 
                        id="close-btn" 
                        className="btn" 
                        onClick={() => setOpen(false)}
                        >CLOSE</button>
				</div>
			</div>
		</div>
    )
}

export default Popup
