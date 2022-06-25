
var userName = document.getElementById('name');
var email = document.getElementById('email');
var phone = document.getElementById('phone');
var age = document.getElementById('age');
var password = document.getElementById('password');
var repassword = document.getElementById('repassword');
var allMoviesNow = document.getElementById('allmoviesnow');
var searchMovie = document.getElementById('movies');








// Navbar Toggle
$('.toggle i').click( function () {

    

    if( $(".navmenu").css('left') == "0px") {
        $('.toggle').find($(".fa")).toggleClass('fa-xmark').toggleClass('fa-align-justify');
        let width = $('.navmenu').outerWidth();
        $('.navmenu').animate({left: -width}, 100);
        $('ul').hide(500)
    }
    else{
        $('.toggle').find($(".fa")).toggleClass('fa-align-justify').toggleClass('fa-xmark');
        $('.navmenu').animate({left: "0"}, 100 , function () {
            $('ul').show(1000)
        });
        
    }
})

let allMovies;
let allSearchedMovies;

// Trending
async function getTrending() {
    let alldata = await fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=150499b0f43f13a7cdc184bc93cc74c6`);
    let resp = await alldata.json();
    allMovies = resp.results;
    displayMovies();
   
}


// now playing
async function getNowPlaying() {
    let alldata = await fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=150499b0f43f13a7cdc184bc93cc74c6`);
    let resp = await alldata.json();
    allMovies = resp.results;
    displayMovies();
   
}

// Popular
async function getPopular() {
    let alldata = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=150499b0f43f13a7cdc184bc93cc74c6`);
    let resp = await alldata.json();
    allMovies = resp.results;
    displayMovies();
   
}

// Top Rated
async function getTopRated() {
    let alldata = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=150499b0f43f13a7cdc184bc93cc74c6`);
    let resp = await alldata.json();
    allMovies = resp.results;
    displayMovies();
   
}

// Up Coming
async function getUpComing() {
    let alldata = await fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=150499b0f43f13a7cdc184bc93cc74c6`);
    let resp = await alldata.json();
    allMovies = resp.results;
    displayMovies();
   
}

async function getMovie(movie) {
    let alldata = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=150499b0f43f13a7cdc184bc93cc74c6&language=en-US&query=${movie}&page=1&include_adult=false`);
    let resp = await alldata.json();
    allSearchedMovies = resp.results;
    displaySearchedMovies();
   
}

$('#movies').keyup(function () {
    getMovie(searchMovie.value);
    if (searchMovie.value == '') {
        displayMovies();
    }
})



function displaySearchedMovies() {
    box = '';
    
    for (let i = 0; i < allSearchedMovies.length; i++) {
       
        box += `<div class="col-md-4">
        <div class="card ">
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${allSearchedMovies[i].poster_path}" alt="movie" class="w-100">
                <div class="layer d-flex align-items-center">
                    <div class="info text-center p-3">
                        <h2 class="fs-2 mb-3">${allSearchedMovies[i].original_title}</h2>
                        <p class="fs-5 font-weight-bold">${allSearchedMovies[i].overview}</p>
                        <p class="fs-5 font-weight-bold">rate: ${allSearchedMovies[i].vote_average}</p>
                        <p class="fs-5 font-weight-bold">${allSearchedMovies[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        
    }

    document.getElementById('data').innerHTML = box;

   

}




function displayMovies() {
    box = '';
    
    for (let i = 0; i < allMovies.length; i++) {
       
        box += `<div class="col-md-4">
        <div class="card ">
            <div class="movie">
                <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" alt="movie" class="w-100">
                <div class="layer d-flex align-items-center">
                    <div class="info text-center p-3">
                        <h2 class="fs-2 mb-3">${allMovies[i].original_title}</h2>
                        <p class="fs-5 font-weight-bold">${allMovies[i].overview}</p>
                        <p class="fs-5 font-weight-bold">rate: ${allMovies[i].vote_average}</p>
                        <p class="fs-5 font-weight-bold">${allMovies[i].release_date}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>`;
        
    }

    document.getElementById('data').innerHTML = box;

}


getNowPlaying();

$('.trending').click(function () {
    getTrending();
})
$('.nowplaying').click(function () {
    getNowPlaying();
})
$('.popular').click(function () {
    getPopular();
})
$('.topRated').click(function () {
    getTopRated();
})
$('.upComing').click(function () {
    getUpComing();
})







// Search


$('#allmoviesnow').keyup(function () {
    box = '';
    for (let i = 0; i < allMovies.length; i++) {
        
        if(allMovies[i].original_title.toLowerCase().includes(allMoviesNow.value.toLowerCase()) == true){
            box += `<div class="col-md-4">
            <div class="card ">
                <div class="movie">
                    <img src="https://image.tmdb.org/t/p/w500${allMovies[i].poster_path}" alt="movie" class="w-100">
                    <div class="layer d-flex align-items-center">
                        <div class="info text-center p-3">
                            <h2 class="fs-2 mb-3">${allMovies[i].original_title}</h2>
                            <p class="fs-5 font-weight-bold">${allMovies[i].overview}</p>
                            <p class="fs-5 font-weight-bold">rate: ${allMovies[i].vote_average}</p>
                            <p class="fs-5 font-weight-bold">${allMovies[i].release_date}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
        }
    }

    document.getElementById('data').innerHTML = box;
})



var rgxName = /^[a-zA-Z ]+$/
var rgxEmail = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
var rgxPhone = /^(02)?01[0125][0-9]{8}$/
var rgxAge = /^([1-9]|[1-9][0-9]|100)$/
var rgxPassword = /^(?=.*[0-9])(?=.*[a-z]).{8,30}$/


$('#name').keyup(function () {

    if(rgxName.test(userName.value) == true){
        $('.name').addClass('d-none')
    }
    else{
        $('.name').removeClass('d-none')
    }
})

$('#email').keyup(function () {

        if(rgxEmail.test(email.value) == true){
            $('.email').addClass('d-none')
        }
        else{
            $('.email').removeClass('d-none')
        }
})

$('#phone').keyup(function () {

    if(rgxPhone.test(phone.value) == true){
        $('.phone').addClass('d-none')
    }
    else{
        $('.phone').removeClass('d-none')
    }
})

$('#age').keyup(function () {

    if(rgxAge.test(age.value) == true){
        $('.age').addClass('d-none')
    }
    else{
        $('.age').removeClass('d-none')
    }
})

$('#password').keyup(function () {

    if(rgxPassword.test(password.value) == true){
        $('.password').addClass('d-none')
    }
    else{
        $('.password').removeClass('d-none')
    }
})

$('#repassword').keyup(function () {

    if(password.value == repassword.value){
        $('.repassword').addClass('d-none')
    }
    else{
        $('.repassword').removeClass('d-none')
    }
})

