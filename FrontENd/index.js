document.addEventListener('DOMContentLoaded', ()=>{
  console.log('DomContentLoaded')

  fetch('http://localhost:3000/comments') // one paramater assumes GET request, fetch returns a Promise (eventual value)
    .then(response => response.json()) // .then() waits for Promise return value from fetch, return from this .then is parsed json
    .then(comments => ourFunction(comments))

  function ourFunction(comments){
    
    comments.map(comment=>{
      const commentContent = document.createElement('p');
      commentContent.innerText = comment.content
      document.body.append(commentContent)
    })
  }

})