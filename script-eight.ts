const output8 = document.querySelector('.output');
const url = 'https://script.google.com/macros/s/AKfycbwIrTmXmMCtgC-1VVitPdm9cnqj7tLZV8m4BvR2wKDrm9cvxBw/exec';
let page = 0;
//loadPage(page);

let arr = ['Test1000', 'AnotherONE'];

let formData = new FormData();
formData.append('data', JSON.stringify(arr));

fetch(url, {
  "method": "POST",
  body: formData
}).then(response => {
  return response.json()
}).then(data => {
  console.log(data);
  loadPage(page);
})

function loadPage(pg) {
  console.log(pg);
  let tempURL = url + '?pg=' + pg;
  fetch(tempURL, {
    "method": "GET"
  }).then(response => {
    return response.json()
  }).then(data => {
    console.log(data);
    loadPageData(data.data);

    if (data.pgs.next) {
      console.log('page', page)
      page = data.pgs.next;
      loadPage(page);
    }
  })
}

function loadPageData(data) {
  console.log(data);
  data.forEach(value => {
    output8.innerHTML += `${value[0]} ${value[1]}<br>`;
  });
}