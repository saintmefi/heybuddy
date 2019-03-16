let inputuno = document.getElementById("inlineCheckbox1") 
let inputdos = document.getElementById("inlineCheckbox2")
let inputtres = document.getElementById("inlineCheckbox3")
let button = document.getElementById("button")


score = () => {
    if (inputuno.checked === true){
       return mostrarscore.innerHTML = "Tu score es: Nivel bajo"
    }else if ( inputdos.checked === true){
        return mostrarscore.innerHTML = "Tu score es: Nivel intermedio"
    } else if( inputtres.checked === true){
        return mostrarscore.innerHTML = "Tu score es: Nivel alto"
    } else{
        return mostrarscore.innerHTML = "Selecciona todas las opciones"
    }
}

button.addEventListener("click", score)
