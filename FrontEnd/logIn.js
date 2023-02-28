const user = {
    email: document.querySelector('email').value,
    password: document.querySelector('password').value
  };
  console.log(user)


  let response = await fetch('http://localhost:5678/api/users/login', {
    method: 'POST',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  });
  
  let result = await response.json();
  console.log(result)



const formLogIn = document.querySelector('#formLogIn')


formLogIn.addEventListener("input", async function(event) {
    event.preventDefault()

    
})

