
let left_btn = document.getElementsByClassName('bi-chevron-left')[0];
let right_btn = document.getElementsByClassName('bi-chevron-right')[0];
let cards = document.getElementsByClassName('cards')[0];
let search = document.getElementsByClassName('search')[0];
let search_input = document.getElementById('search_input');

left_btn.addEventListener('click', ()=>{
    cards.scrollLeft -= 140;
})

right_btn.addEventListener('click', ()=>{
    cards.scrollLeft += 140;
})
// Перший спосід створення пошуку за допомогою json
let json_url = "movie.json";

fetch(json_url).then(Response => Response.json())
.then((data) => {
    data.forEach((ele, i) => {
        let { name, imdb, data, sposter, bposter, genre, url } = ele;
        let card = document.createElement('a')
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}" class="poster">
        <div class="rest_card">
            <img src="${bposter}" alt="">
            <div class="cont">
                <h4>${name}</h4>
                <div class="sub">
                    <p>${genre} ${data}</p>
                    <h3><span>IMBD</span>${imdb}</h3>
                </div>
            </div>
        </div>
        `

        cards.appendChild(card)
    });

    document.getElementById('title').innerText = data[0].name;
    document.getElementById('gen').innerText = data[0].genre;
    document.getElementById('data').innerText = data[0].data;
    document.getElementById('rate').innerText = data[0].imdb;

    //search data Load
    data.forEach(element =>{
        let { name, imdb, data, sposter, genre, url } = element;
        let card = document.createElement('a')
        card.classList.add('card');
        card.href = url;
        card.innerHTML = `
        <img src="${sposter}" alt="${name}">
        <div class="cont">
            <h3>${name}</h3>
            <p>${genre}, ${data}, <span>IMDB</span>${imdb}</p>
        </div>
        `

        search.appendChild(card);

    })

    //search fillter
    search_input.addEventListener('keyup', () =>{
        let fillter = search_input.value.toUpperCase();
        let a = search.getElementsByTagName('a');

        for (let index = 0; index < a.length; index++) {
            let b = a[index].getElementsByClassName('cont')[0];
            //console.log(a.textCountent)
            let TextValue = b.textContent || b.innerText;
            if(TextValue.toUpperCase().indexOf(fillter) > -1){
                a[index].style.display = 'flex';
                search.style.visibility = "visible";
                search.style.opacity = 1
            } else{
                a[index].style.display = 'none'
            }
            if(search_input.value == 0){
                search.style.visibility = "hidden";
                search.style.opacity = 0
            }
        }
    })


    let video = document.getElementsByTagName('video')[0];
    let play = document.getElementById('play');
    play.addEventListener('click', ()=>{
        if(video.paused){
            video.play();
            play.innerHTML = `Play <i class="bi bi-pause-fill"></i>`
        } else{
            video.pause();
            play.innerHTML = `Watch <i class="bi bi-play-fill"></i>`
        }
    })

    let series = document.getElementById('series');
    let movies = document.getElementById('movies');

    series.addEventListener('click', ()=>{
        cards.innerHTML = '';

        let series_array = data.filter(ele =>{
            return ele.type === "series";
        })


        series_array.forEach((ele, i) => {
            let { name, imdb, data, sposter, bposter, genre, url } = ele;
            let card = document.createElement('a')
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre} ${data}</p>
                        <h3><span>IMBD</span>${imdb}</h3>
                    </div>
                </div>
            </div>
            `
    
            cards.appendChild(card)
        });
        
    })

    movies.addEventListener('click', ()=>{
        cards.innerHTML = '';

        let movies_array = data.filter(ele =>{
            return ele.type === "film";
        })


        movies_array.forEach((ele, i) => {
            let { name, imdb, data, sposter, bposter, genre, url } = ele;
            let card = document.createElement('a')
            card.classList.add('card');
            card.href = url;
            card.innerHTML = `
            <img src="${sposter}" alt="${name}" class="poster">
            <div class="rest_card">
                <img src="${bposter}" alt="">
                <div class="cont">
                    <h4>${name}</h4>
                    <div class="sub">
                        <p>${genre} ${data}</p>
                        <h3><span>IMBD</span>${imdb}</h3>
                    </div>
                </div>
            </div>
            `
    
            cards.appendChild(card)
        });
        
    })

});

//Другий спосіб 

// const movie = [
//     {
//         "name": "The Boys",
//         "imdb": 9.3,
//         "data": "2022",
//         "sposter": "img/the boys.jpg",
//         "bposter": "img/the boys.jpg",
//         "genre": "Action",
//         "type": "series",
//         "url": "the boys.html",
//         "trailer": "the boys trailer.mp4",
//         "low": "video/the boys 360.mp4",
//         "medium": "video/the boys 720.mp4"
//     },
//     {
//         "name": "Money Heist",
//         "imdb": 9.9,
//         "data": "2020",
//         "sposter": "img/money heist.jpg",
//         "bposter": "img/money heist.jpg",
//         "genre": "Action",
//         "type": "series",
//         "url": "money heist.html",
//         "trailer": "money heist trailer.mp4",
//         "low": "video/the boys 360.mp4",
//         "medium": "video/the boys 720.mp4"
//     },
//     {
//         "name": "John Wick",
//         "imdb": 9.9,
//         "data": "2021",
//         "sposter": "img/john wick.jpg",
//         "bposter": "img/john wick.jpg",
//         "genre": "Murdering",
//         "type": "series",
//         "url": "john wick.html",
//         "trailer": "john wick.mp4",
//         "low": "video/the boys 360.mp4",
//         "medium": "video/the boys 720.mp4"
//     },
//     {
//         "name": "Marvel DS",
//         "imdb": 8.3,
//         "data": "2020",
//         "sposter": "img/markev ds.jpg",
//         "bposter": "img/markev ds.jpg",
//         "genre": "Fantastik",
//         "type": "film",
//         "url": "marvel ds.html",
//         "trailer": "marvel ds trailer.mp4",
//         "low": "video/the boys 360.mp4",
//         "medium": "video/the boys 720.mp4"
//     },
//     {
//         "name": "The Spider-Man",
//         "imdb": 9.8,
//         "data": "2023",
//         "sposter": "img/the spider-man.jpg",
//         "bposter": "img/the spider-man.jpg",
//         "genre": "Fantastik",
//         "type": "film",
//         "url": "the spider-man.html",
//         "trailer": "the spider-man trailer.mp4",
//         "low": "video/the spider-man 360.mp4",
//         "medium": "video/the spider-man 720.mp4"
//     },
//     {
//         "name": "The Witcher",
//         "imdb": 9.0,
//         "data": "2021",
//         "sposter": "img/the witcher.jpg",
//         "bposter": "img/the witcher.jpg",
//         "genre": "Fantastik",
//         "type": "film",
//         "url": "the witcher.html",
//         "trailer": "the witcher trailer.mp4",
//         "low": "video/the spider-man 360.mp4",
//         "medium": "video/the spider-man 720.mp4"
//     },
//     {
//         "name": "Momia",
//         "imdb": 7.7,
//         "data": "2022",
//         "sposter": "img/the boys.jpg",
//         "bposter": "img/the boys.jpg",
//         "genre": "Horror",
//         "type": "series",
//         "url": "momia.html",
//         "trailer": "momia trailer.mp4",
//         "low": "video/the spider-man 360.mp4",
//         "medium": "video/the spider-man 720.mp4"
//     },
//     {
//         "name": "Evangelion",
//         "imdb": 9.3,
//         "data": "2022",
//         "sposter": "img/evangelion.jpg",
//         "bposter": "img/evangelion.jpg",
//         "genre": "Drama",
//         "type": "series",
//         "url": "evangelion.html",
//         "trailer": "evangelion trailer.mp4",
//         "low": "video/evangelion 360.mp4",
//         "medium": "video/evangelion 720.mp4"
//     }
// ]

// window.addEventListener('load', ()=>{
//     movie.forEach(element => {
//         let { name, imdb, data, sposter, genre, url } = element;
//         let card = document.createElement('a')
//         card.classList.add('card');
//         card.href = url;
//         card.innerHTML = `
//         <img src="${sposter}" alt="${name}">
//         <div class="cont">
//             <h3>${name}</h3>
//             <p>${genre}, ${data}, <span>IMDB</span>${imdb}</p>
//         </div>
//         `
//         search.appendChild(card);

//     });
// })

// search_input.addEventListener('keyup', ()=>{
//     let filter = search_input.value.toUpperCase();
//     let a = search.getElementsByTagName('a')
//     for (let i = 0; i < a.length; i++) {
//         let b = a[i].getElementsByClassName('cont')[0]
//         //console.log(a.textCountent)
//         let TextValue = b.textContent || b.innerText;
//         if(TextValue.toUpperCase().indexOf(filter) > -1){
//             a[i].style.display = 'flex';
//         } else{
//             a[i].style.display = 'none'
//         }
//     }
// })