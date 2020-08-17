const output2 = document.querySelector('.output');
const url2 = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';
fetch(url2, {
  method: "GET"
})
  .then((response) => {
    return response.json()
  })
  .then(data => {
    console.log(data.items);
    data.items.forEach(item => {
      console.log(item.id);
      output2.innerHTML += `
        ${item.description} 
        <br>`;
    })
  }).catch(error => { console.log(error) });