const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const showRectangle = document.getElementById("rectangle")
const showRectangle2 = document.getElementById("rectangle2")

const passwordEl = document.getElementById("password1")

 let passwordLength = 12

passwordEl.addEventListener("click", function() {
    for (let i = 0; i < passwordLength; i++){

    const random1 = Math.floor(Math.random() * characters.length)
    const random2 = Math.floor(Math.random() * characters.length) 
    
     
    showRectangle.textContent  = `${[characters[random1] + random1 + characters[random1] + random2 + characters[random2]]}` 
    showRectangle2.textContent = `${[characters[random2] + random2 + characters[random2] + random1 + characters[random1]]}` 
    }
}) 

