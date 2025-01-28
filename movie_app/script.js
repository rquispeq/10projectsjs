const options = {method: 'GET', headers: {accept: 'application/json'}};

fetch('https://api.themoviedb.org/3/discover/movie?api_key=04c35731a5ee918f014970082a0088b1', options)
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.error(err));