const output3 = document.querySelector('.output');
const url3 = 'https://en.wikipedia.org/api/rest_v1/feed/featured/2020/01/01';
fetch(
  url3, {
  "method": "GET"
})
  .then(response => {
    return response.json();
  }).then(data => {
    console.log(data.onthisday);
    data.onthisday.forEach(day => {
      console.log(day.text);
      output3.innerHTML += `${day.text}<br>`;
    })
  }).catch(error => {
    console.log(error);
  })
