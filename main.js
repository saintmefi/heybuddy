let selector = document.getElementById('selector');
let boton = document.getElementById('boton');

const cambio =()=>{
    let seleccionado = document.getElementById(selector.value);
    seleccionado.scrollIntoView({behavior:"smooth"});

}

boton.addEventListener('click', cambio);