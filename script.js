const form = document.getElementById('userForm');



// Add a submit event listener to the form
form.addEventListener('submit', function(event) {
  // Prevent the form from submitting and reloading the page
  event.preventDefault();

  // Get form values
  const name = document.getElementById('nameInput').value;
//   const email = document.getElementById('emailInput').value;

  const zip = document.getElementById('zipInput').value;
  const workType = document.getElementById('jobs').value;
  const pickUp = document.getElementById("pickUpInput").value;
  const message = document.getElementById("message").value;
  const dropOff= document.getElementById("dropOfInput").value;

const params = {
 name:name,
 pick_up:pickUp, 
 zip:zip, 
 drop_off:dropOff,
 work_type:workType, 
 message:message 
 

    
} 
emailjs.send("service_r1kkbs7","template_yqnsg0k",params).then(function(res){alert("Success!" + res.status )})
});

