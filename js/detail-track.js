
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
        alert.innerText = ""
    })

    })



let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString)
let id = queryStringToObject.get('id');

let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`

fetch( url ) 
.then( function(response){ 
        return response.json()
})
.then( function(data){ 
console.log(data);
    let titulo = document.querySelector('.titulo-detail-can')
    titulo.innerText += `${data.title}`  

    let img= document.querySelector(".img-detail-can");
    img.innerHTML += `<img width="400px"  class="imagen-cancion"   src="${data.album.cover_big}" alt="Album Cover">`
        
    let nombreartista = document.querySelector(".nombre-artista");
    nombreartista.innerHTML += `<a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a>`    
        
    let nombrealbum = document.querySelector(".album");
    nombrealbum.innerHTML += `<a href="detalle-album.html?id=${data.album.id}">${data.album.title}</a>` 

 
})
.catch( function(error){
    console.log(error);
})

let favoritos = [];

    
    let recuperoStorage = localStorage.getItem('favoritos')
    
    if(recuperoStorage != null){
        favoritos = JSON.parse(recuperoStorage)
    }       
    
    if(favoritos.includes(id)){
        document.querySelector('.boton').innerHTML = `<i class="fas fa-heart"></i> Quitar de mí playlist`
    }
    
    let favo= document.querySelector('.boton')
        console.log(favo);
    
    favo.addEventListener("click", function(e){
        e.preventDefault();
    
        if(favoritos.includes(id)){
            let idASacar = favoritos.indexOf(id)
            favoritos.splice(idASacar, 1)
            document.querySelector('.boton').innerHTML = `<i class="far fa-heart"></i> Añadir a mi playlist`
        } else {
            favoritos.push(id);
            console.log(favoritos);
            document.querySelector('.boton').innerHTML = `<i class="fas fa-heart"></i> Quitar de mí playlist`
        }

        let favparastorage = JSON.stringify(favoritos)
        
        localStorage.setItem('favoritos', favparastorage)
        console.log(localStorage);  
    })
