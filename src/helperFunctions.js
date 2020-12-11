import {
    BASE_BOOKS_URL,
    NYT_APIKEY,
    BASE_NEWS_URL,
    BASE_IMG_URL
} from './constants';

const _getRandomObj = (arr, size) => {
    let result = [];

    while (result.length < size) {
        const random = Math.floor(Math.random() * arr.length);
        if (result.indexOf(arr[random]) === -1) {
            result.push(arr[random]);
        }
    }

    return result;
}

export const fetchData = {
    books: async subCategory => {
        const url = `${BASE_BOOKS_URL}/${subCategory}.json?api-key=${NYT_APIKEY}`; // construct the URL for API call
        const res = await fetch(url); // wait for API resp
        const data = await res.json(); // parse API resp as JSON, quick also returns a promise
        const books = await _getRandomObj(data.results.books, 10); // get randomly 10 books from the API resp, in json format

        /**
         * for each of the books that we have picked randomly from the resp
         * construct the following JSX syntax 
         * study the structure of the original site.utils function in are_you_bored non React application
         */
        return books;
    },
    news: async subCategory => {
        const url = `${BASE_NEWS_URL}/${subCategory}.json?api-key=${NYT_APIKEY}`; // construct the URL for API call
        const resp = await fetch(url);
        const data = await resp.json();
        const articles = _getRandomObj(data.results, 10);
        return articles;
    },
    movies: () => Promise.resolve({ body: 'test movies content' }),
    music: () => Promise.resolve({ body: 'test music content' })  
}

export const getImgUrl = subCat => BASE_IMG_URL + subCat;
