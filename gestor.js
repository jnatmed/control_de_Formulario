export class Gestor{
    $(idElement){
        return document.querySelector(idElement);
    }
    $create(nameElement){
        return document.createElement(nameElement);
    }
    consola(msj){
        console.log(msj)
    }
}