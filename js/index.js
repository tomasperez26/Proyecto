

function validarCampo(){
    let campo = document.getElementById("search-input").value;
    if (campo === "") 
      alert("El campo de búsqueda está vacío. Por favor, ingrese un valor.");  
    else if ( campo.value.length < 3)
        alert("Por favor ingrese más de 3 carácteres")
}



    //TOPSONGS
    let urlSongs = "https://www.deezer.com/track/2246628067"
    fetch( urlSongs ) //Permite consultar la url de forma asincrónica, es una promesa
    .then( function(response){ //procesa
        return response.json(); //es otra promesa, necesita otro then para contenerla
    })
    .then( function(data){ //Aca muestro código

        let arraySongs = data.data;
        let topSongs= document.querySelector(".track_home_conteiner");
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
