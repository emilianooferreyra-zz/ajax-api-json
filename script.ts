const friend1 = {
  "name": {
    "first": "Laurence",
    "last": "Sweden"
  },
  "age": 20,
  "location": {
    "city": "Toronto",
    "country": "Canada"
  }
};

const friend2 = {
  "name": {
    "first": "Lisa",
    "last": "Svejis"
  },
  "age": 40,
  "location": {
    "city": "New York",
    "country": "USA"
  }
};

const friend3 = {
  "name": {
    "first": "John",
    "last": "Doe"
  },
  "age": 30,
  "location": {
    "city": "California",
    "country": "USA"
  }
};
const friends = [friend1, friend2, friend3];
const output = document.querySelector('.output');
console.log(friends);
const sFriends = JSON.stringify(friends);
console.log(sFriends);
const oFriends = JSON.parse(sFriends);
console.log(oFriends);
