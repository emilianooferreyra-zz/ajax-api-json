const url5 = 'https://api.chucknorris.io/jokes/search?query=big';
fetch(url5, {
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
