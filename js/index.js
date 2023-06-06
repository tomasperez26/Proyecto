


function validarCampo(){
    let campo = document.getElementById("search-input").value;
    if (campo === "") 
      alert("El campo de búsqueda está vacío. Por favor, ingrese un valor.");  
    else if ( campo.value.length < 3)
        alert("Por favor ingrese más de 3 carácteres")
}

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
