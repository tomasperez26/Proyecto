


let recuperoStorage = localStorage.getItem("favoritos");

let favoritos = JSON.parse(recuperoStorage)

for (i=0; i<favoritos.length; i++){
    contlocalstorage (favoritos[i]);
}

function contlocalstorage (id){
    let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`
    fetch(url)

	.then(function(response) {
        return response.json()
    })

    .then(function(data){
        let cancionesFavs = document.querySelector('.miPlaylist');
        cancionesFavs.innerHTML +=
        `

        <article class="cada-favorito" >

        
            <a href="detalle-cancion.html?id=${data.id}"><img class="imagen-playlist" src="${data.album.cover_big}" width="300px"></a>


             <h3><a href="detalle-cancion.html?id=${data.id}">${data.title}</a></h3>


            <h5 ><a href="detalle-artista.html?id=${data.artist.id}">${data.artist.name}</a></h5>
           

        </article> `
    })
    .catch( function(error){
        console.log(error)
    })

}
let formulario = document.querySelector("form");
    let campoBuscar = document.querySelector("[name = search]");
    let alert = document.querySelector(".alerta");

    formulario.addEventListener("submit" , function(e){
        e.preventDefault()

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


