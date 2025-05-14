function users(page){
    document.getElementById('info').innerHTML = '<h1> Lista de usuarios</h1>'
    document.getElementById('cardHeader').innerHTML ='<h5> Listado de Usuarios</h5>'
    const REQRES_ENDPOINT ='https://reqres.in/api/users?page=' + page
  fetch( REQRES_ENDPOINT, {
    method:'GET',
    headers :{
      'content-type':'application/json','x-api-key':'reqres-free-v1'
    },

  })
  .then((response)=>{
return response.json().then(
    data =>{
        return{
            status :response.status,
            info: data
        }
    }
)
  })
  .then ((result)=>{
    console.log('resultado', result)
    if(result.status === 200){
      let listUsers = `<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">nombre</th>
      <th scope="col">apellido</th>
      <th scope="col">avatar</th>
      <th scope="col">accion</th>
    </tr>
  </thead>
  <tbody>
      `

      result.info.data.forEach(element =>{
        listUsers = listUsers + `
         <tr>
         <td>${element.id} </td>
         <td>${element.first_name} </td>
         <td>${element.last_name} </td>
         <td> <img src="${element.avatar}" class="img-thumbnail" alt="avatar del usuario"> </td>
         <td> <button type="button" class="btn btn-outline-info " onclick ="getUser('${element.id}')">ver</button></td>
         </tr>
         `
         
      }) 
      listUsers = listUsers + 
      `</tbody>
      </table> <nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#" onclick ="users('1')">1</a></li>
    <li class="page-item"><a class="page-link" href="#"onclick ="users('2')">2</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>`
      
document.getElementById('info').innerHTML = listUsers
    }else {
        document.getElementById('info').innerHTML ='No existen usuarios en la BD'
    }
  })
}
function products(page){
    document.getElementById('info').innerHTML = '<h1> Lista de productos</h1>'
    document.getElementById('cardHeader').innerHTML ='<h5> Listado de Productos</h5>'
    const REQRES_ENDPOINT ='https://reqres.in/api/products?page=' + page
    fetch( REQRES_ENDPOINT, {
      method:'GET',
      headers :{
        'content-type':'application/json','x-api-key':'reqres-free-v1'
      },
  
    })
    .then((response)=>{
  return response.json().then(
      data =>{
          return{
              status :response.status,
              info: data
          }
      }
  )
    })
    .then ((result)=>{
      console.log('resultado', result)
      if(result.status === 200){
        let listProducts = `<table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">nombre</th>
        <th scope="col">año</th>
        <th scope="col">color</th>
      </tr>
    </thead>
    <tbody></tbody>
        `
  
        result.info.data.forEach(element =>{
          listProducts = listProducts + `
           <tr>
           <td>${element.id} </td>
           <td>${element.name} </td>
           <td>${element.year} </td>
           <td>  <input type="color" id="head" name="head" value="${element.color}" />  </td>
           </tr>
           `
           
        }) 
        listProducts = listProducts + 
        `</tbody>
        </table>`
  document.getElementById('info').innerHTML = listProducts
      }else {
          document.getElementById('info').innerHTML ='No existen productos en la BD'
      }
    })
}
function logout(){
localStorage.removeItem('token')
location.href = '../index.html'
}
function getUser(idUser){
  const REQRES_ENDPOINT ='https://reqres.in/api/user/' + idUser
  fetch( REQRES_ENDPOINT, {
    method:'GET',
    headers :{
      'content-type':'application/json','x-api-key':'reqres-free-v1'
    },

  })
  .then((result) => {
return result.json().then(
  data =>{
    return {
      status:result.status,
      body:data
    }
  }
)
  })
  .then((response)=>{
    if(response.status ===200){
      const user = response.body.data
      const modalUser =`<div class="modal" id="modalUser" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">Ver usuario</h1>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <img src="${user.avatar}" class="img-thumbnail" alt="avatar del usuario">
                  <br>
                  Nombre:${user.first_name} 
                   <br>
                  Apellido:${user.last_name} 

                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                </div>
              </div>
            </div>  
          </div>
      `

    }else {
document.getElementById('info').innerHTML ='<h3> No se encontro el usuario en la Api </h3>'

    }

  })
}