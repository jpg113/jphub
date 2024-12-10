fetch('https://jphub.onrender.com/students')
  .then(response => response.json())
  .then(json => {
    json.forEach(student => {
      let paragraph = document.createElement('p');
      paragraph.innerHTML = ` ID: ${student['id ']} - Name: ${student.name} `; 
      document.body.appendChild(paragraph);
    });
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });