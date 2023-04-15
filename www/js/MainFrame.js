

const ShowPublication = () =>{
    let imgLocal = JSON.parse(localStorage.getItem("publicaciones")) 
    let principalContainer = document.getElementById("Container")

    let element = ""
    console.log(imgLocal)
    

    for (let i = 0; i < imgLocal.length; i++) {


        element +=`
        <div class="MainFrame">
    
            <div class="content">
                <div class="image">
                    <img src="${imgLocal[i].Image}" alt="some image" class="imagep" id=${imgLocal.length}>
                </div>
                <h2>${imgLocal[i].Comment}</h2>
                <div class="
                icons">
                    <div class="icons-p">
                        <div>
                            <img src="../img/IMG 3.png" alt="">
                            
                           
                        </div>
                        <div> <h3 >${imgLocal[i].Name}</h3></div>
                        <div> <img src="../img/heart.svg" alt=""></div>
                        <div> <img src="../img/share.svg" alt=""></div>
    
                    </div>
    
    
                    <div> 
                        <img src="../img/save.svg" alt=""></div>
                </div>
    
            </div>
            <div class="second-content"></div>
        </div>` 
        
        principalContainer.innerHTML=element

    }

    

}
