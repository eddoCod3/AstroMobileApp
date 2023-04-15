


showResult();

        
function showResult() {
    
    
    const inputEl = document.getElementById('imageFileInput');
    inputEl.addEventListener('change', () => {
        const file = inputEl.files[0];
        const fr = new FileReader();
        fr.readAsDataURL(file);


        
       
        fr.addEventListener('load', () => {
            const url = fr.result
            const img = new Image();
            img.src = url;
            document.getElementById('output').appendChild(img);
        })
    })
}

const PushImage = () =>{
    const publicaciones=[]
  let imageSave = document.querySelector("#imageFileInput")
  let publComment = document.getElementById("comentario")
  let userName = JSON.parse (localStorage.getItem("Sesion"))


  var reader = new FileReader()
  reader.readAsDataURL(imageSave.files[0]);

  reader.addEventListener('load', () =>{
    

    const publicacion = {
      Image: reader.result,
      Comment: publComment.value,
      Name:userName.usuariInicio.name
    }
    const datos = JSON.parse(localStorage.getItem("publicaciones"))
    if(!datos){
    publicaciones.push(publicacion)
    localStorage.setItem("publicaciones", JSON.stringify(publicaciones))
    setTimeout(() =>{
      window.location.href="MainFrame.html"
  },1000)
    
  }else{
    datos.push(publicacion)
    localStorage.setItem("publicaciones", JSON.stringify(datos))
    setTimeout(() =>{
      window.location.href="MainFrame.html"
  },1000)
  }
  })
}

  