function nuevoValidar(){
    var nombre,apellidos, edad, direccion, telefono, correo, cantidad,opcion, expresion;
    nombre=document.getElementById("name").value;
    apellidos=document.getElementById("surname").value;
    edad=document.getElementById("age").value;
    direccion=document.getElementById("address").value;
    telefono=document.getElementById("phone").value;
    correo=document.getElementById("email").value;
    cantidad=document.getElementById("quantity").value;
    
if(nombre === " " || apellidos ===" " || edad ===" " || direccion === " " || telefono===" " || correo===" " || cantidad===){
        alert("Todos los campos son obligatorios");
        return false;
    }
    else if(nombre.lenght>15){
        alert("El nombre es muy largo");
        return false;
    }
    else if(apellidos.lenght>12){
        alert("Los apellidos son muy largos");
        return false;
    }
    else if(isNaN(edad)){
        alert("Dato no valido, ingrese la edad en valor numerico");
        return false;
    }
    else if(edad<18){
        alert("Lo sentimos no se puede continuar");
        return false;
    }
    else if(direccion.lenght>50){
        alert("La dirección es muy larga");
        return false;
    }
    else if(isNaN(telefono)){
        alert("Dato no valido, ingrese el telefono en valor numerico");
        return false;
    }
    else if(correo.lenght>40){
        alert("El correo es muy largo");
        return false;
    }
    else if(cantidad>2 || cantidad ==0){
        alert("La cantidad no es correcta");
        return false;
    }

}