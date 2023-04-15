//obtencion de usuarios
var keysBD = {
  IdUsers: 'users',
  IdPubtion:'publications'

}


var getUsers = ()=>{
  let firstValueUsers = [{
    id: 1,
    user: 'edd@gmail.com',
    password: '1234',
    name: 'edd'
  }];
  

  let users = localStorage.getItem(keysBD.IdUsers);
  
  if(!users){
    localStorage.setItem(keysBD.IdUsers, JSON.stringify(firstValueUsers))
    return firstValueUsers;
  }
  return JSON.parse(users);
  
}

var setUsers = (newUsers) =>{ 
  localStorage.setItem(keysBD.IdUsers, JSON.stringify(newUsers) );
}

