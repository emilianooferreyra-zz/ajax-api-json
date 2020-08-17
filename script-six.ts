const output6 = document.querySelector('.output');
const url6 = 'https://reqres.in/api/users';
fetch(url6, {
  "method": "GET"
}).then(res => {
  return res.json()
}).then(data => {
  console.log(data);
  data.data.forEach(person => {
    console.log(person);
    output6.innerHTML = `<img src="${person.avatar}">`;
  })
}).catch(err => {
  console.log(err);
})
