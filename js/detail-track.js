

window.addEventListener("load", function(){

let queryString = location.search 
let queryStringToObject = new URLSearchParams(queryString); 
let id = queryStringToObject.get('id');

let url= `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${id}`})

fetch(url) 
.then( function(response){ 
        return response.json(); 
})
.then( function(data){ 
    console.log(data);

})
.catch( function(error){
    console.log(error);
})