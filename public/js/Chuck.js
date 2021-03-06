const JOKE_BTN = document.getElementById('jokeBtn');
const JOKE_TEXT = document.getElementById('jokeText');

const URL = 'https://api.chucknorris.io/jokes/random';

JOKE_BTN.addEventListener('click', () => {
    fetch(URL)
        .then(res => res.json())
        .then(data => JOKE_TEXT.innerHTML=data.value);
});