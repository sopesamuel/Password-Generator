const characters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"]

const showRectangle = document.getElementById("rectangle")
const showRectangle2 = document.getElementById("rectangle2")

const passwordEl = document.getElementById("password1")


passwordEl.addEventListener("click", function() {

    const random1 = Math.floor(Math.random() * characters.length)
    const random2 = Math.floor(Math.random() * characters.length) 

    
    showRectangle.textContent  = `${[characters[random1]]}` 
    showRectangle2.textContent = `${[characters[random2]]}` 
    
}) 

