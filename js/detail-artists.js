
let formulario = document.querySelector("form")
    let campoBuscar = document.querySelector("[name = search]")
    let alert = document.querySelector(".alerta")

    formulario.addEventListener("submit" , function(e){
        e.preventDefault();

    if(campoBuscar.value == ""){
        alert.innerText = "El campo no puede estar vacío";
    }else if( campoBuscar.value.length < 3){
        alert.innerText = "Por favor ingrese más de 3 carácteres"
    }else{
        this.submit(); 
    }
    campoBuscar.addEventListener("input" , function(){
        alert.innerText = ""
    })

    })





let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get('id') 

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}` 

fetch( url ) 
    .then( function(response){ 
        return response.json() 
    })
    .then( function(data){
        console.log(data)

        let section = document.querySelector('.nombre-artista')
        section.innerHTML += `<h1 >${data.name}</h1>` 

        let img= document.querySelector(".imgartista")
        img.innerHTML += `<img class="imagen-artista"width="400px" src="${data.picture_big}" alt="Artista">` 

    })
    .catch( function(error){
        console.log(error);
    })


    let urlTop = `https://api.allorigins.win/raw?url=https://api.deezer.com/artist/${id}/albums`
    
    fetch( urlTop ) 
        .then( function(response){ 
                return response.json(); 
        })
        .then( function(data){
            console.log(data)
            let arrayInfo = data.data
            let topAlbums = document.querySelector(".top-albums");
            let contenido =""
            console.log(data)

            for(let i=0; i<5; i++){
                contenido += ` 
                        <li class="t-albums"> 
                            <a href="detalle-album.html?id=${arrayInfo[i].id}">
                            <img width="100px" class="imagenes-top-albums" src="${arrayInfo[i].cover_medium}" alt="Album Small"> ${arrayInfo[i].title}</a> 
                        </li>` 
                    
            
            } 
            topAlbums.innerHTML += contenido
                
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