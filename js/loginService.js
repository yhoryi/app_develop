document.getElementById('loginForm').addEventListener('submit', function(e){
e.preventDefault();
const email = document.getElementById('email').value;
const password  = document.getElementById('password').value;

login(email, password)

});

function login(email, password){
  let message =''
  let alertType =''
  const REQRES_ENDPOINT ='https://reqres.in/api/login'
  fetch( REQRES_ENDPOINT, {
    method:'POST',
    headers :{
      'content-type':'application/json','x-api-key':'reqres-free-v1'
    },

body: JSON.stringify({email, password})
  })


  .then ((response) =>{
    if(response.status === 200){
       alertType ='success'
       message ='Inicio de sesion exitoso'

       alertBuilder(alertType,message)
       response.json().then((data )=>(
        localStorage.setItem('token', data.token)
       ))
       setTimeout(() => { 
        location.href = 'admin/dashboard.html'

      }, 2000 )//2000 MS = 2 SEGUNDOS
       
    }else {
       alertType ='danger'
      message ='usuario o contraseña incorrecta'
    }
   
    console.log('respuesta de servicio', response)
    alertBuilder(alertType,message)

  } )

  .catch((error) =>{
    alertType ='danger'
    message ='ocurrio un error inesperado'
    console.log('respuesta de servicio', error)
    alertBuilder(alertType,message)

  }) 

}

function alertBuilder (alertType, message) {
  const alert = 
  `<div class="alert alert-${alertType} alert-dismissible fade show" role="alert">
       ${message}
       <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
       </div>`
       document.getElementById('mensaje').innerHTML = alert;
}