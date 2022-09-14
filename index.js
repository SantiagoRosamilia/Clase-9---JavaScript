//Parte 1
const si = document.querySelector('#si');
const no = document.querySelector('#no');
const reset = document.querySelector('#reset')
const h1 = document.querySelector('#h1');

document.querySelector('h1').textContent = "Hola, buenas tardes" 

si.addEventListener('click', function functionCambio(){
                                                h1.classList.add('nuevofondo')
                                                h1.textContent = "Ahora si"
                                            });

no.addEventListener('click', function functionVolver(){
                                                h1.classList.remove('nuevofondo')
                                                h1.textContent = "Ahora no"
                                            });

reset.addEventListener('click', function functionReset(){
                                                h1.classList.remove('nuevofondo')
                                                h1.textContent = "Hola, buenas tardes"
                                            });


//Parte 2

const formulario = document.querySelector('#formularioUsuario')

formulario.onsubmit = (e)=> {
    e.preventDefault()
    
    Array.from(e.target.children).forEach(input=>{
        console.log(input.value)
    })
}
    




