


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


let urlGeneros = "https://api.allorigins.win/raw?url=https://api.deezer.com/genre";
        
 

 fetch( urlGeneros ) 
  .then( function(response){ 
               return response.json() })


  .then( function(data){ 
    
  let arrayInfo = data.data;
  let generos = document.querySelector('.generos')
  let contenido =""; 
  console.log(data)


  for(let i=1; i<arrayInfo.length; i++){ 
  contenido += `
   <article class="genres">   
   <a href="detail-genres.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}"><img  width="400px"  src="${arrayInfo[i].picture_medium}" alt="genre imagen"></a>
    <h4><a class="genero" href="detalle-genres.html?id=${arrayInfo[i].id}&genre=${arrayInfo[i].name}">${arrayInfo[i].name}</a></h4>
   </article> ` }
generos.innerHTML += contenido  })
  .catch( function(error){
   console.log(error) }) 



        
