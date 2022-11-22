const searchform = document.querySelector('#search-form');

function apiSearch(event) {
  event.preventDefault();
  const searchText = document.querySelector('.form-control').value;
  const movies = document.querySelector('#movies');
  const server = 'https://api.themoviedb.org/3/search/multi?api_key=8dfa794ac85140c24e9966c55dc846e7&language=rhttps://api.themoviedb.org/3/search/multi?api_key=8dfa794ac85140c24e9966c55dc846e7&language=ru&query=' + searchText;
  requestApi(server)
    .then(function (result) {
      const output = JSON.parse(result);
      let inner = '';
      output.results.forEach(function (item) {
        let nameItem = item.name || item.title;
        let releaseDateMovies = item.release_date;

        inner += '<div class = "col-12">' + nameItem + " , " + "Дата вых: " + "  " + releaseDateMovies + '</div>';
      });
      movies.innerHTML = inner;

    });

  ;
};

searchform.addEventListener('submit', apiSearch);

function requestApi(url) {

  return new Promise(function (resolve, reject) {
    const request = new XMLHttpRequest();
    request.open('GET', url);

    request.addEventListener('load', function () {
      if (request.status !== 200) {
        reject({ status: request.status });
        return;
      }

      resolve(request.response);


    });

    request.addEventListener('error', function () {
      reject({ status: request.status });

    });




    request.send();
  });


  35:50



  /*
    request.addEventListener('readystatechange', function () {
      if (request.readyState !== 4) {
        movies.innerHTML = 'Загрузка';
        return;
      }
  
      if (request.status !== 200) {
        movies.innerHTML = 'Упс, что-то пошло не так';
        console.log('error: ' + request.status);
        return;
      }
  
  
    });
  
  */
}


