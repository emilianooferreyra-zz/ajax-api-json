const output10 = document.querySelector('.output');
output10.textContent = "Get Users";
output10.addEventListener('click', users);
const url10 = 'https://api.stackexchange.com/2.2/questions?order=desc&sort=activity&site=stackoverflow';
function users() {
  fetch(url10).then(response => { return response.json() })
    .then(data => {
      console.log(data);
      data.items.forEach(value => {
        console.log(value.owner.display_name);
        output10.innerHTML += `
          ${value.owner.display_name} <br>
        `
      });
    })
}