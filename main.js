import { Gestor } from "./gestor";

let gestor = new Gestor()
let input = gestor.$('#enviar')

input.addEventListener('click', e =>{
  e.preventDefault();

  ['#nombre','#apellido','#edad','#evento','#pais','#cantidad'].forEach(input => {
      let campo = input.split('#')[1];
      if(gestor.$(input).value==""){
        console.log(`EL CAMPO "${(campo).toLocaleUpperCase()}" ESTA VACIO`)
      }
      
      if(campo=="edad" && gestor.$(input).value<18){
        console.log(`EL CAMPO ${(campo).toLocaleUpperCase()} DEBE SER MAYOR A 18`)
      }

      let paises = {"argentina" : 50, "uruguay" : 60, "chile" : 70}    

      if(campo=="cantidad" && gestor.$(input).value < paises[gestor.$('#pais').value]){
        console.log(`Cantidad no permitida para ${gestor.$('#pais').value}`)
      }

  });

  
})



