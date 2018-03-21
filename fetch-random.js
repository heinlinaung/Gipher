'use strict';
let source_img = document.getElementsByTagName('img')[0]

fetch('https://api.giphy.com/v1/gifs/random?api_key=RzhJZxufesXDEQ5feRw92UZruYYA8wob&tag=emma-watson&rating=G')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    source_img.src = myJson.data.images.original.webp;
  })
  .catch(err=>{
    source_img.src = '404.gif'
  })
