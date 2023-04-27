import { Gestor } from "./gestor";

let gestor = new Gestor()
let input = gestor.$('#enviar')
let paises = {"argentina" : 50, "uruguay" : 60, "chile" : 70}

input.addEventListener('click', e =>{
  e.preventDefault();
  let formularioValido = true;
  ['#nombre','#apellido','#edad','#evento','#pais','#cantidad'].forEach(input => {
      let campo = input.split('#')[1];
      if(gestor.$(input).value==""){
        gestor.mostrarCartel(`EL CAMPO "${(campo).toLocaleUpperCase()}" ESTA VACIO`)
        formularioValido = false;
      }
      
      if(campo=="edad" && gestor.$(input).value<18){
        gestor.mostrarCartel(`EL CAMPO ${(campo).toLocaleUpperCase()} DEBE SER MAYOR A 18`)
        formularioValido = false;
      }    

      if(campo=="cantidad" && gestor.$(input).value > paises[gestor.$('#pais').value]){
        gestor.mostrarCartel(`Cantidad no permitida para ${gestor.$('#pais').value}`)
        formularioValido = false;
      }
  // })
    
  });
  if(formularioValido){
    gestor.mostrarCartel('FORMULARIO VALIDADO, felicitaciones')
  }else{
    gestor.mostrarCartel('FORMULARIO NO COMPLETO O LLENADO DE MANERA INCORRECTA')
  }
  
})



