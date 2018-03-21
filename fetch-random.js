fetch('https://api.giphy.com/v1/gifs/random?api_key=RzhJZxufesXDEQ5feRw92UZruYYA8wob&tag=emma-watson&rating=G')
  .then(function(response) {
    return response.json();
    // console.log('response: ',response)
    // let source_img = document.getElementsByTagName('img')[0]
    // source_img.src =response.images.original.webp;
    // return response;
  })
  .then(function(myJson) {
    let source_img = document.getElementsByTagName('img')[0]
    console.log('myJson: ',myJson)
    source_img.src = myJson.data.images.original.webp;
  })
  .catch(err=>{
    console.log('err: ',err)
  })
