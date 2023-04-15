const changeUser =()=>{
  let users = getUsers();
  let usuarioSesion = JSON.parse(localStorage.getItem("Sesion"))
  let ChangeName = document.querySelector("#nameChange").value

    let findUser = users.find(e=>e.id == usuarioSesion.usuariInicio.id)

    if(findUser){
      
      findUser.name = ChangeName
      setUsers(users)
      let LoginSesion = {
        usuariInicio:findUser, 
        
      }
      localStorage.setItem("Sesion", JSON.stringify(LoginSesion))

    }

   
}

let showUserProfil  = () =>{


  const SesionU = JSON.parse(localStorage.getItem("Sesion"))

  console.log(SesionU.usuariInicio)

  const displayName = document.querySelector("#Nombre")
  displayName.innerHTML = SesionU;

  
}

let logOut = ()=>{
  localStorage.removeItem("Sesion")
  window.location.href="inicio.html"

}