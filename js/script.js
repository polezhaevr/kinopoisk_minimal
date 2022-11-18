const searchform = document.querySelector('#search-form');

function apiSearch(event) {
    event.preventDefault();
    const searchText = document.querySelector('.form-control').value;
    const movies = document.querySelector('#movies');
    const server = 'https://api.themoviedb.org/3/search/multi?api_key=8dfa794ac85140c24e9966c55dc846e7&language=rhttps://api.themoviedb.org/3/search/multi?api_key=8dfa794ac85140c24e9966c55dc846e7&language=ru&query=' + searchText;
    requestApi(server);
};

searchform.addEventListener('submit', apiSearch);

function requestApi(url) {

    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('readystatechange',function() {
         if (request.readyState !== 4) return;

         if(request.status !== 200){
            console.log('error: ' + request.status);
            return;
         }

         const output = JSON.parse(request.responseText);

         let inner = ''; 

         output.results.forEach(function (item){
           let nameItem = item.name || item.title; 
           console.log (nameItem);     
           inner += '<div class = "col-12">' + nameItem + '</div>';
         });

         movies.innerHTML = inner; 

    });
}


