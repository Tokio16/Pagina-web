var respuesta = prompt('Cual es la contraseña para entrar?');   
const passwd = 'Contraseña';            
if (respuesta.toLowerCase() == passwd.toLowerCase()) {
    console.log('contraseña correcta');
}    
else{
    console.log("Incorrecto.");
}