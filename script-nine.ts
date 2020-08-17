const output9 = document.querySelector('.output');
output9.textContent = "Get a Joke";
output9.addEventListener('click', jokes);
const url9 = 'https://api.jokes.one/jod?category=animal';

function jokes() {
  fetch(url9).then(response => { return response.json() })
    .then(data => {
      console.log(data);
      console.log(data.contents.jokes[0].joke.title);
      output9.textContent = data.contents.jokes[0].joke.title;
    })
}