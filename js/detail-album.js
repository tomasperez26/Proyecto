

let formulario = document.querySelector("form");
    let campoBuscar = document.querySelector("[name = search]");
    let alert = document.querySelector(".alerta");

    formulario.addEventListener("submit" , function(e){
        e.preventDefault();

    if(campoBuscar.value == ""){
        alert.innerText = "El campo no puede estar vacío";
    }else if( campoBuscar.value.length < 3){
        alert.innerText = "Por favor ingrese más de 3 carácteres";
    }else{
        this.submit(); 
    }
    campoBuscar.addEventListener("input" , function(){
        alert.innerText = "";
    })

    })



let queryString = location.search;
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}`

fetch (url)
.then(function (response){
        return response.json();
})
.then (function(data){
    console.log(data)

    let nombreAlbum = document.querySelector(".nombre-disco2")
    nombreAlbum.innerText += `${data.title}`
    let imagenAlbum = document.querySelector(".imgartist");
    imagenAlbum.innerHTML += `<img width="400px" class="imagen-album" src="${data.cover_big}" alt="Foto del Album">`

    let contenidoNombreArtista = document.querySelector(".nombre-artista2")
    contenidoNombreArtista.innerHTML += `<a  class="nombre-artista2" href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a>`    
        
    let genero = document.querySelector(".genero")
    genero.innerHTML += `<a href="detalle-genres.html?id=${data.genre_id}&genre=${data.genres.data[0].name}">${data.genres.data[0].name} </a>`
 

    let fecha = document.querySelector(".fechaPublicasion")
    fecha.innerHTML +=`${data.release_date}`

})
.catch( function(error){
    console.log(error)
})

let urlTrack = `https://api.allorigins.win/raw?url=https://api.deezer.com/album/${id}/tracks`;

fetch (urlTrack)
.then(function (response){
    return response.json()
})
.then (function(data){
        console.log(data)
        
    let arrayInfo = data.data;
    let tracklist = document.querySelector(".cansionesdisco")
    let contenidoLista =""
    console.log(data)

    for(let i=0; i<arrayInfo.length; i++){
        contenidoLista += `
                <li class="top"> 
                    <a href="detalle-cancion.html?id=${arrayInfo[i].id}"><i></i>${arrayInfo[i].title}</a> 
                </li>` 
    
    
    }
        tracklist.innerHTML += contenidoLista; 

})
.catch( function(error){
    console.log(error)
})
/* dark mode */

let body = document.body;
let headings = document.getElementsByTagName('h1');
let darkModeButton = document.getElementById('darkModeButton');

let isDarkMode = localStorage.getItem('isDarkMode') === 'true';

updateMode();

darkModeButton.onclick = function() {
  isDarkMode = !isDarkMode;
  updateMode();
  localStorage.setItem('isDarkMode', isDarkMode);
};

function updateMode() {
  if (isDarkMode) {
    applyDarkMode();
    darkModeButton.textContent = 'Modo Claro';
  } else {
    removeDarkMode();
    darkModeButton.textContent = 'Modo Oscuro';
  }
}

function applyDarkMode() {
  body.style.backgroundImage = 'url(./img/fondo-negro.jpeg)';
  body.style.color = 'white';
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = 'white';
  }
}

function removeDarkMode() {
  body.style.backgroundImage = 'url(./img/wallpaperflare.com_wallpaper.jpg)';
  body.style.color = '#000';
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.color = 'white';
  }
}