let generateBtn = document.getElementById("generate-btn")
let output1 = document.getElementById("output1")
let output2 = document.getElementById("output2")
let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

generateBtn.addEventListener("click", function() {

  let randomCharacters = [];

  for ( let i = 0; i < 50; i++ ) {

    let randomIndex = Math.floor( Math.random() * characters.length )

    randomCharacters.push( characters[ randomIndex ] )
  }

  let fifteenChars = randomCharacters.slice(0, 15)

  output1.textContent = fifteenChars.join(" ")
  
})

generateBtn.addEventListener("click", function() {

  let randomCharacters = [];

  for ( let i = 0; i < 50; i++ ) {

    let randomIndex = Math.floor( Math.random() * characters.length )

    randomCharacters.push( characters[ randomIndex ] )
  }

  let fifteenChars = randomCharacters.slice(0, 15)

  output2.textContent = fifteenChars.join(" ")
  
})