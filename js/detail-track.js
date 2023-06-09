window.addEventListener("load", function() {
    let queryString = location.search;
    let queryStringToObject = new URLSearchParams(queryString);
    let dat = queryStringToObject.get('dat');
  
    let url = `https://api.allorigins.win/raw?url=https://api.deezer.com/track/${dat}`;

    console.log(dat);
  
    fetch(url)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        let titulo= document.querySelector('.titulo-detail-ca'); 
        titulo.innerText += `${data.title}`;     
    
        let img= document.querySelector(".img-detail-can");
        img.innerHTML += `<img width="400px"  class="detalle"   src="${data.album.cover_big}" alt="Album Cover">`
            
        let artista = document.querySelector(".nombre-artista");
        artista.innerHTML += `<a href="detail_artist.html?id=${data.artist.id}">${data.artist.name}</a>`    
                        
      })
      .catch(function(error) {
        console.log(error);
      });
  });
  

 
 