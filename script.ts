const output = document.querySelector('.output');
// const url = 'https://api.myjson.com/bins/1bqkpq';
// fetch(url)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//     data.array.forEach(friend => {
//       console.log(friend.name.first);
//       output.innerHTML += `
//         ${friend.name.first} ${friend.name.last}
//         ${friend.age}
//       `;
//     });
//   })

const url = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';
fetch(url)
  .then((response) => {
    return response.json()
  })
  .then(data => {
    console.log(data.items);
    data.items.forEach(item => {
      console.log(item.id);
      output.innerHTML += `
        ${item.description} 
        <br>`;
    })
  });