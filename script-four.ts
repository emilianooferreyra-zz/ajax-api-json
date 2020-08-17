const url4 = 'https://cors-anywhere.herokuapp.com/https://samples.openweathermap.org/data/2.5/weather?id=2172797&appid=b6907d289e10d714a6e88b30761fae22';
fetch(url4, {
  "method": "GET"
}).then(res => {
  return res.json()
}).then(data => {
  console.log(data);
}).catch(err => {
  console.log(err);
})
