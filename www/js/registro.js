



const changePage = () =>{
    let usuarioRegistro = document.getElementById("user")
    let passwordRegistro = document.getElementById("password")
    let passwordRegistroRepet = document.getElementById("passwordR")
    let usuarioEmail = document.getElementById("email")
    let user = getUsers()
   

    if( usuarioRegistro.value && passwordRegistro.value  && passwordRegistroRepet.value && usuarioEmail.value ){
        let userNew  = {
            id:user.length +1,
            user:usuarioEmail.value,
            password:passwordRegistro.value,
            name:usuarioRegistro.value        
            
        }
        user.push(userNew)
        setUsers(user)
        alert("Usuario Insertado")
        setTimeout(() =>{
            window.location.href="login.html"
        },1000)
        

    }else{
       
        console.log("No se inserto")
      
       
      
        
    }
    
    
}

    