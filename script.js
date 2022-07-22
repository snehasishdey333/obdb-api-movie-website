const SearchMovieName = document.getElementById("search-movie-name");
const searchMovieButton = document.getElementById("search-movie-btn");
const posterDiv = document.getElementById("poster");
const titleDiv=document.getElementById("titleDiv");
const yearDiv=document.getElementById("yearDiv");
const ratedDiv=document.getElementById("ratedDiv");
const releasedDiv=document.getElementById("releasedDiv");
const runtimeDiv=document.getElementById("runtimeDiv");
const genreDiv=document.getElementById("genreDiv");
const directorDiv=document.getElementById("directorDiv");
const writerDiv=document.getElementById("writerDiv");
const actorsDiv=document.getElementById("actorsDiv");
const plotDiv=document.getElementById("plotDiv");
const languageDiv=document.getElementById("languageDiv");

//api key is changed
//you can get your own api key here
//http://www.omdbapi.com/#usage

const API_KEY = "acdc50243957";

function getMovie(movieName) {
    return fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&t=${movieName}`)
        .then(response => response.json())
        .then(json => {
             console.log(json);
            titleDiv.innerHTML=`<h1>${json.Title}</h1>`
            posterDiv.innerHTML =`<img src=${json.Poster} alt="" height=200 width=200>`
            yearDiv.innerHTML=`Year : <h3>${json.Year}</h3>`
            ratedDiv.innerHTML=`Rated : <h3>${json.Rated}</h3>`
            releasedDiv.innerHTML=`Released : <h3>${json.Released}</h3>`
            runtimeDiv.innerHTML=`Runtime : <h3>${json.Runtime}</h3>`
            genreDiv.innerHTML=`Genre : <h3>${json.Genre}</h3>`
            directorDiv.innerHTML=`Director: <h3>${json.Director}</h3>`
            writerDiv.innerHTML=`Writer : <h3>${json.Writer}</h3>`
            actorsDiv.innerHTML=`Actors : <h3>${json.Actors}</h3>`
            plotDiv.innerHTML=`Plot : <p><strong>${json.Plot}</strong></p>`
            languageDiv.innerHTML=`Languages : <h3>${json.Language}</h3>`
        })
        .catch(err => {
            console.log(err);
        })


}

function searchMovie() {
    return getMovie(SearchMovieName.value);
}
