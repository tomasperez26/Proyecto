
let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString); 
let id = queryStringToObject.get('id');


let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/genre/${id}/artists`
        

    fetch( url ) 
        .then( function(response){ 
            return response.json()
        })
        .then( function(data){ 
             console.log(data)
            let arrayInfo = data.data

            let nombregenero = queryStringToObject.get('genre')
    
            titulo= document.querySelector(".titulo-detalle-genero")
            titulo.innerText = `Los mas destacados de ${nombregenero}` 
            
            let artistasGenero= document.querySelector('.contenedor-artistas')
            let contenido = '';

            for(let i=0; i<arrayInfo.length; i++){ 
                contenido+=  ` <article  class="cont-artista">  
                                            <a href="detalle-artista.html?id=${arrayInfo[i].id}"><img width= "300px" class="img-artista" src="${arrayInfo[i].picture_big}"></a>
                                            <h4><a href="detalle-artista.html?id=${arrayInfo[i].id}">${arrayInfo[i].name}</a></h4>                   
                                        </article>   `                                    
                                }

                   artistasGenero.innerHTML += contenido                                               
              
        })
        .catch( function(error){
            console.log(error);

        })