let urlGenres = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre/0"

fetch(urlGenres) 
             .then( function(response){ 
               return response.json(); 
         })


          .then( function(data){ 
    
            let arrayInfo = data.data;
            let generos = document.querySelector('.contenedor_generos');
            let contenido =""; 
            console.log(data)


            

            
        })
        .catch( function(error){
            console.log(error);
        }) 

    