function users(){
    document.getElementById('info').innerHTML = '<h1> Lista de usuarios</h1>'
    const REQRES_ENDPOINT ='https://reqres.in/api/users?page=1'
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
    </tr>
  </thead>
  <tbody></tbody>
      `

      result.info.data.forEach(element =>{
        listUsers = listUsers + `
         <tr>
         <td>${element.id} </td>
         <td>${element.first_name} </td>
         <td>${element.last_name} </td>
         <td> <img src="${element.avatar}" class="img-thumbnail" alt="avatar del usuario"> </td>
         </tr>
         `
         
      }) 
      listUsers = listUsers + 
      `</tbody>
      </table>`
document.getElementById('info').innerHTML = listUsers
    }else {
        document.getElementById('info').innerHTML ='No existen usuarios en la BD'
    }
  })
}
function products(){
    document.getElementById('info').innerHTML = '<h1> Lista de productos</h1>'
    const REQRES_ENDPOINT ='https://reqres.in/api/products?page=1'
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
