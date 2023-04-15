const login = ()=>{
  let email = document.querySelector('#email')
  let password = document.querySelector('#password')
  let divError = document.querySelector('#error');
  let users = getUsers();
  
  if(!email.value && !password.value){
    divError.innerHTML = 'Introduce correo y contraseña';
  }else{
    let findUser = users.find(e=>e.user == email.value);
    if(!findUser){
      divError.innerHTML = 'Usuario no encontrado';
    }
    if(findUser.password == password.value && findUser.user == email.value){
 

      let LoginSesion = {
        usuariInicio:findUser, 
        
      }
      localStorage.setItem("Sesion", JSON.stringify(LoginSesion))

           window.location.href = "MainFrame.html";
    

    }else{
      divError.innerHTML = 'Usuario o contraseña incorrecta'
    }
  }
}