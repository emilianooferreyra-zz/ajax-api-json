const output1 = document.querySelector('.output');
const url1 = 'https://api.myjson.com/bins/1bqkpq';
fetch(url1)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
    data.array.forEach(friend => {
      console.log(friend.name.first);
      output1.innerHTML += `
        ${friend.name.first} ${friend.name.last}
        ${friend.age}
      `;
    });
  })

