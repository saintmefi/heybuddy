var player = "turn1"
var element1 = ""
var element2 = ""
var cards = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]
var tries = 0 
randomize() 
console.log(cards)

function randomize(){
  var figura = 0
  var par = "primero"
  for (var i = 0; i < cards.length; i++) { 
    var j = Math.floor((Math.random() * 16));
    while(cards[j] != 10){
      j = Math.floor((Math.random() * 16));
    }
    cards[j] = Math.floor(figura)
      if (par === "primero"){
        figura = figura + 1  
        par = "segundo"
      }
      else {
        par = "primero"
      }
  }
}

function checkIfWon(element1, element2){
  if (element1.classList[2] != element2.classList[2]){
    element1.classList.remove("sun","yen","circle", "cross", "phone", "snow","nuke","star","rotate")
    element2.classList.remove("sun","yen","circle", "cross", "phone", "snow","nuke","star","rotate")
  }
  else{
    alert(Hello)
  }
}

function ultimateWin(){
   console.log("HOLA")
  var memoryBlocks = document.getElementsByClassName('block')
  for (var i = 0; i< memoryBlocks.length; i++){
    console.log(memoryBlocks[i])
    if (memoryBlocks[i].classList.contains("cross")
        ||memoryBlocks[i].classList.contains("circle") 
        ||memoryBlocks[i].classList.contains("phone")
        ||memoryBlocks[i].classList.contains("yen")
        ||memoryBlocks[i].classList.contains("sun")
        ||memoryBlocks[i].classList.contains("star")
        ||memoryBlocks[i].classList.contains("nuke")
        ||memoryBlocks[i].classList.contains("snow")
       ){
      console.log("Esta ocupado")
      var bandera = true
    }
    else{
      console.log("Esta vacio")
      var bandera = false
      break
    }
  }
  if (bandera === true){
    console.log("RESETAR")
    document.getElementById('banner').style.display = "block"
    document.getElementById('banner').innerHTML = "You won! in: "+tries+" tries \n Reload Page to play again"
  }
}


document.addEventListener('click', function (event) {
  console.log(cards)
  if (event.target.classList.contains("block")) {
    var evento = event.target.classList
    var elements = document.getElementsByClassName('block')
    for (var i = 0; i < elements.length; i++){
      if (elements[i] == event.target){
          var position = i
          break
          }
    }
    for (var i = 0; i < cards.length; i++){
      if (cards[position] === 0 || cards[position] === 8){
          event.target.classList.add("rotate")
          event.target.classList.add("cross")
      }
      else if (cards[position] === 1){
          event.target.classList.add("rotate")
          event.target.classList.add("circle")
      }
      else if (cards[position] === 2){
        event.target.classList.add("rotate")
          event.target.classList.add("sun")
      }
      else if (cards[position] === 3){
        event.target.classList.add("rotate")
          event.target.classList.add("snow")
      }
      else if (cards[position] === 4){
        event.target.classList.add("rotate")
          event.target.classList.add("yen")
      }
      else if (cards[position] === 5){
        event.target.classList.add("rotate")
          event.target.classList.add("phone")
      }
      else if (cards[position] === 6){
        event.target.classList.add("rotate")
          event.target.classList.add("nuke")
      }
      else if (cards[position] === 7){
        event.target.classList.add("rotate")
          event.target.classList.add("star")
      }
    }
    if (player === "turn1"){
        element1 = event.target
    }
    else{
        element2 = event.target
    }
    if (player === "turn2"){
      setTimeout(function(){
        checkIfWon(element1,element2)
      },800)
    }
    if ( player === "turn1"){
        player = "turn2"
    }
    else{
        tries++
        player = "turn1"
    }
    setTimeout(function(){
        ultimateWin()
      },1000)
  }
})
