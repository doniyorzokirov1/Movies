const API_KEY = '1d6f12eadb346596c95e0f0bb2f75432'
const BASE_URL = 'https://api.themoviedb.org/3'
const IMG_URL = 'https://image.tmdb.org/t/p/original'

let modal = document.querySelector('.modal')
let modalBody = document.querySelector('.modal-body')
let modalBtn = document.querySelector('.modal-btn')

let elMovieList = document.querySelector('.movies-list')
let elSecondList = document.querySelector('.movies-list-second ')

let elTemplate = document.querySelector('.movies-template').content

async function request(url, options) {
  let request = await fetch(url, options)
  let data = await request.json()

  return data
}

async function getMoviesLists(movieType) {
  let url = BASE_URL + movieType + API_KEY
  let movies = await request(url, { method: 'GET' })

  onRender(movies.items, elMovieList)
  console.log(movies.items)
}
async function getSecondMoviesLists(movieType) {
  let url = BASE_URL + movieType + API_KEY
  let movies = await request(url, { method: 'GET' })

  onRender(movies.items, elSecondList)
}

let onRender = (movies, child) => {
  movies.forEach((movie) => {
    let cloneTemp = elTemplate.cloneNode(true)
    let movieImg = cloneTemp.querySelector('.card-img-top')
    let movieTitle = cloneTemp.querySelector('.card-title')

    movieImg.src = IMG_URL + movie.poster_path
    movieTitle.textContent = movie.original_title

    child.append(cloneTemp)
  })
}

// let onModal = (evt) => {

//    let modalButton = evt.target.closest('button')
//    if(modalButton) {
//     return modal.classList.add('d-block')
//    }
//    console.log(modalButton);
// }


getMoviesLists('/list/1?api_key=')
getSecondMoviesLists('/list/2?api_key=')
// elMovieList.addEventListener('click', onModal)
