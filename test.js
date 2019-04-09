let inputuno = document.getElementById("inlineCheckbox1") 
let inputdos = document.getElementById("inlineCheckbox2")
let inputtres = document.getElementById("inlineCheckbox3")
let button = document.getElementById("button")

let uno = 

// sumas:

// function uno (){ 
//     while (inputuno.value === true){
//         return 1 
//     } 
// }

// function dos () {
//     while (inputdos.value === true){
//         return 2 
//     } 
// }

// function tres () {
//     while (inputtres.value === true){
//         return 3 
//     } 
// }


// función de suma:

// function resultado ( a , b, c){
//    (a + b + c);
// }

// constante para sacar resultado:

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


// if ( uno.value === true) {
//         return 1
//     }else if ( uno.value === falso){
//         return 0
//     }

//     if ( dos.value === true){
//         return 2
//     } else if (dos.value === false){
//         return 0
//     }
    
//     if (tres.value === true){
//         return 3
//     }else if (tres.value === false){
//         return 0
//     }


// resultado = () => {
//     let uno = 1 || 0
//     let dos = 2 || 0
//     let tres = 3 || 0

//     let suma = (a,b,c){
//         (a + b + c);
//     }
  
//  }


// button.addEventListener("click", resultado)

// funcion que saque los datos de cada input, cuanto suma y al final devolver el total 