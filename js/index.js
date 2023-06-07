


function validarCampo(){
    let campo = document.getElementById("search-input").value;
    if (campo === "") 
      alert("El campo de búsqueda está vacío. Por favor, ingrese un valor.");  
    else if ( campo.value.length < 3)
        alert("Por favor ingrese más de 3 carácteres")
}

let urlSongs = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/tracks`;
    
    fetch( urlSongs ) //Permite consultar la url de forma asincrónica, es una promesa
    .then( function(response){ //procesa
        return response.json(); //es otra promesa, necesita otro then para contenerla
    })
    .then( function(data){ //Aca muestro código

        let arraySongs = data.data;
        let topSongs= document.querySelector(".cansiones");
        let conten =""; //contenido dentro de la lista, a llenar
        console.log(data)

        for(let i=0; i<5; i++){//bucle  que recorre array de albumes
        conten += `
            <article class="track_home">
                <a href="detail_track.html?id=${arraySongs[i].id}"><img width="225px" src="${arraySongs[i].album.cover_big}" alt="Canción"></a>
                <h5><a class="nombreDelArtista" href="detail_artist.html?id=${arraySongs[i].artist.id}">${arraySongs[i].artist.name}</a></h5>
                <h3><a href="detail_track.html?id=${arraySongs[i].id}">${arraySongs[i].title}</a></h3>
            </article>`
        
        } 
           topSongs.innerHTML += conten;         
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
let arrayAlbums = data.data;
let topAlbums= document.querySelector(".albumes");
let element =""; 
console.log(data)

for(let i=0; i<5; i++){
    element+= `<article class="album_track_home">
        <a href="detail_album.html?id=${arrayAlbums[i].id}"><img src="${arrayAlbums[i].cover_big}"></a>
        <h3><a href="detail_album.html?id=${arrayAlbums[i].id}">${arrayAlbums[i].title}</a></h3>
    </article>`

} 
   topAlbums.innerHTML += element;         
})
.catch( function(error){
    console.log(error);
})

//top artitas


let urlArtistas = `https://api.allorigins.win/raw?url=https://api.deezer.com/chart/0/artists`
    
fetch( urlArtistas ) 
    .then( function(response){ 
        return response.json();
    })
    .then( function(data){ 

        let arrayArtistas = data.data;
        let topArtists = document.querySelector(".artistas");
        let elemen =""; 
        console.log(data)

        for(let i=0; i<5; i++){
            elemen += `
            <article class="artistas_home">    
                <a href="detail_artist.html?id=${arrayArtistas[i].id}"><img src="${arrayArtistas[i].picture_big}" alt="artista imagen"></a>
                <h4><a href="detail_artist.html?id=${arrayArtistas[i].id}">${arrayArtistas[i].name}</a></h4>
            </article>`
        
        } 
          topArtists.innerHTML += elemen;          
    })
    .catch( function(error){
        console.log(error);
    })
