


window.addEventListener('load', function(){

  let loader = document.querySelector('.gif');
  loader.style.display = 'none'
  


  let queryString = location.search; 
  let queryStringObj = new URLSearchParams(queryString); 
  let formulario = queryStringObj.get("search")

  let datoBuscado = document.querySelector(".resultados-busquedas"); 
  datoBuscado.innerText = `Resultados para ${formulario}` 

  let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/search?q=${formulario}`;

  fetch(url) 
    .then(function(response) { 
      return response.json();
    })
    .then(function(data) {
      let resultadosData = data.data;
      let contenedor = document.querySelector(".contenedor-resultados");
      let infoDeapi = ""; 

      if (resultadosData.length > 0) {
        for (let i = 0; i < resultadosData.length; i++) {
          infoDeapi += `
            <article class="contenedor-artista">    
              <a href="detalle-artista.html?id=${resultadosData[i].artist.id}">
                <img class="img-search" width="400px" src="${resultadosData[i].artist.picture_big}">
              </a>
              <h4>
                <a href="detalle-artista.html?id=${resultadosData[i].artist.id}">
                  ${resultadosData[i].artist.name}
                </a>
              </h4>
            </article>
            <article class="contenedor-cancion">    
              <a href="detalle-cancion.html?id=${resultadosData[i].id}">
                <img class="img-search" width="400px" src="${resultadosData[i].album.cover_big}">
              </a>
              <h4>
                <a href="detalle-cancion.html?id=${resultadosData[i].id}">
                  ${resultadosData[i].title}
                </a>
              </h4>
            </article>
            <article class="contenedor-album">    
              <a href="detalle-album.html?id=${resultadosData[i].album.id}">
                <img class="img-search" width="400px" src="${resultadosData[i].album.cover_big}">
              </a>
              <h4>
                <a href="detalle-album.html?id=${resultadosData[i].album.id}">
                  ${resultadosData[i].album.title}
                </a>
              </h4>
            </article>`;
        }
      } else {
        infoDeapi = "<p>No se encontraron resultados.</p>"
      }

      contenedor.innerHTML += infoDeapi;
    })
    .catch(function(error) {
      console.log(error);
    });



  let formula = document.querySelector("form");
      let campoBuscar = document.querySelector("[name = search]")
      let alert = document.querySelector(".alerta");

      formula.addEventListener("submit" , function(e){
          e.preventDefault();

      if(campoBuscar.value == ""){
          alert.innerText = "El campo no puede estar vacío";
      }else if( campoBuscar.value.length < 3){
          alert.innerText = "Por favor ingrese más de 3 carácteres";
      }else{
          this.submit(); 
      }
      campoBuscar.addEventListener("input" , function(){
          alert.innerText = ""
      })

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
})