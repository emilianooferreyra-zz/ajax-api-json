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

// const url = 'https://api.github.com/search/repositories?q=tetris+language:assembly&sort=stars&order=desc';
// fetch(url, {
//   method: "GET"
// })
//   .then((response) => {
//     return response.json()
//   })
//   .then(data => {
//     console.log(data.items);
//     data.items.forEach(item => {
//       console.log(item.id);
//       output.innerHTML += `
//         ${item.description} 
//         <br>`;
//     })
//   }).catch(error => { console.log(error) });

// const url = 'https://en.wikipedia.org/api/rest_v1/feed/featured/2020/01/01';
// fetch(
//   url, {
//   "method": "GET"
// })
//   .then(response => {
//     return response.json();
//   }).then(data => {
//     console.log(data.onthisday);
//     data.onthisday.forEach(day => {
//       console.log(day.text);
//       output.innerHTML += `${day.text}<br>`;
//     })
//   }).catch(error => {
//     console.log(error);
//   })

// const url = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22';
// fetch(url,{
//   "method" :"GET"
// }).then(res => {
//   return res.json()
// }).then(data => {
//   console.log(data);
// }).catch(err => {
//   console.log(err);
// })

const url = 'https://api.chucknorris.io/jokes/search?query=big';
fetch(url, {
  "method": "GET"
}).then(res => {
  return res.json()
}).then(data => {
  console.log(data.result);
  data.result.forEach(joke => {
    console.log(joke.value);
  })
}).catch(err => {
  console.log(err);
})