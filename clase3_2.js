document.form1.ciudad.selectedIndex=-1;
document.form1.registrar.onclick=procesar; //llamar una func sin parent, llamando al onclick del boton una funcion
document.form1.limpiar.onclick=function(){ //otra manera de la de arriba, funcion que funciona solo en este onclick
    alert(this.value)
}
onfocus=function(){
    if(this.style!==undefined)
        this.style.backgroundColor="lightblue";
}
onblur=function(){
    if(this.style!==undefined)
        this.style.backgroundColor="white";
}
document.form1.nombre.onfocus=onfocus;
document.form1.correo.onfocus=onfocus;
document.form1.ciudad.onfocus=onfocus;
document.form1.nombre.onblur=onblur;
document.form1.correo.onblur=onblur;
document.form1.ciudad.onblur=onblur;
// document.form1.nombre.onblur=function(){ UNA FORMA DE HACERLO! para 1 solo
//     this.style.backgroundColor='red';
// }
function procesar(){
    alert(this.value);
    if(validar()){
        alert("Se proceso exitosamente..")
    }
}
function validar(){
    if (!esta_vacio(document.form1.nombre,"Debe escribir el nombre"))
        if(validarcorreo(document.form1.correo))
            if(validar_select(document.form1.ciudad))
                if(validar_check(document.form1.sexo))
                    if(validar_check(document.form1.acepto))
                        return true
                    else
                        return false;
}