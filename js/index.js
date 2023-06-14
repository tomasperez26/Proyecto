

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


let urlSongs = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;
  
  fetch( urlSongs ) 
  .then( function(response){ 
      return response.json()
  })
  .then( function(data){ 

      let arraycanciones = data.data;
      let topcanciones= document.querySelector(".cansiones")
      let conten =""
      console.log(data)

      for(let i=0; i<5; i++){
      conten += `
          <article class="track_home">
              <a href="detail_track.html?id=${arraycanciones[i].id}"><img width="225px"  class="img-index" src="${arraycanciones[i].album.cover_big}" alt="Canción"></a>
              <h5><a class="nombreDelArtista" href="detail_artist.html?id=${arraycanciones[i].artist.id}">${arraycanciones[i].artist.name}</a></h5>
              <h3><a  class= "nombre-cancion" href="detalle-cancion.html?id=${arraycanciones[i].id}">${arraycanciones[i].title}</a></h3>
          </article>`
      
      } 
         topcanciones.innerHTML += conten;         
  })
  .catch( function(error){
      console.log(error);
  })


//top albums
let URLalbums =`https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/albums`;
  
fetch( URLalbums) 
.then( function(response){ 
  return response.json(); 
})
.then( function(data){ 
console.log(data)
let arrayalbums = data.data;
let topalbums= document.querySelector(".albumes");
let element =""
console.log(data)

for(let i=0; i<5; i++){
  element+= `<article class="album_track_home">
      <a href="detail_album.html?id=${arrayalbums[i].id}"><img width="225px"   class="img-index" src="${arrayalbums[i].cover_big}"></a>

      <h3><a href="detalle-album.html?id=${arrayalbums[i].id}">${arrayalbums[i].title}</a></h3>
  </article>`

} 
 topalbums.innerHTML += element;         
})
.catch( function(error){
  console.log(error);
})

//top artitas


let urlartistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`
  
fetch( urlartistas ) 
  .then( function(response){ 
      return response.json()
  })
  .then( function(data){ 

      let arrayartistas = data.data;
      let topartists = document.querySelector(".artistas")
      let elemen =""
      console.log(data)

      for(let i=0; i<5; i++){
          elemen += `
          <article class="artistas_home">    
              <a href="detail_artist.html?id=${arrayartistas[i].id}"><img width="225px"    class="img-index" src="${arrayartistas[i].picture_big}" alt="artista imagen"></a>
              <h4><a href="detalle-artista.html?id=${arrayartistas[i].id}">${arrayartistas[i].name}</a></h4>
          </article>`
      
      } 
        topartists.innerHTML += elemen         
  })
  .catch( function(error){
      console.log(error);
  })