import React from 'react'
import { BASE_IMG_URL, BASE_BOOKS_URL, NYT_APIKEY } from '../../constants'

function Box({category, subCategory, updateContent}) {
    const getImgUrl = subCat => BASE_IMG_URL + subCat;

    const getRandomObj = (arr, size) => {
        let result = [];

        while (result.length < size) {
            const random = Math.floor(Math.random() * arr.length);
            if (result.indexOf(arr[random]) == -1) {
                result.push(arr[random]);
            }
        }

        return result;
    }

    const fetchBooks = async () => {
        const url = `${BASE_BOOKS_URL}/${subCategory}.json?api-key=${NYT_APIKEY}`; // construct the URL for API call
        const res = await fetch(url); // wait for API resp
        const data = await res.json(); // parse API resp as JSON, quick also returns a promise
        const books = await getRandomObj(data.results.books, 10); // get randomly 10 books from the API resp, in json format

        /**
         * for each of the books that we have picked randomly from the resp
         * construct the following JSX syntax 
         * study the structure of the original site.utils function in are_you_bored non React application
         */
        return books.map(({ amazon_product_url, book_image, title, description }) => <div className="article article--books">
                <a href={amazon_product_url}><img src={book_image} alt="" className="book-img"/></a>
                <h4>
                    <a href={amazon_product_url} target="_blank" rel="noreferrer" className="title-link">{title}</a>
                </h4>
                <p class="book-desc">{description}</p>
            </div>
            );
    };

    const fetchNews = () => Promise.resolve({ body: 'test news content' });
    const fetchMovies = () => Promise.resolve({ body: 'test movies content' });
    const fetchMusic = () => Promise.resolve({ body: 'test music content' });

    const handleClick = async e => {
        console.log(category);
        console.log(subCategory);

        let data = null;

        if (category === 'books') {
            data = await fetchBooks();
        } else if (category === 'news') {
            data = await fetchNews();
        } else if (category === 'music') {
            data = await fetchMusic();
        } else if (category === 'movies') {
            data = await fetchMovies();
        }

        updateContent(data);
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
