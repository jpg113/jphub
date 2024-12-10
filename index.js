fetch('https://jphub.onrender.com/students')
    .then(response => response.json ())
    .then(json   => {
json.forEach(id=> { 
 let paraghraph=document.createElement('p')
  paraghraph.innerHTML=id
  document.body.appendChild(paraghraph)
let h=document.createElement('h6')
h.innerHTML=id.name/document.body.appendChild(h)
});

    })

  