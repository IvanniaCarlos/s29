//función que muestra los 10 primeron números
function  contar() {
    // for (inicio,final,pasos)
    for (let i= 1; i <= 10;i++) {
        console.log(i)
    }
}

//Función para saludar con parámetro
function saludar(nombre) {
    console.log(`Hola ${nombre}`)
}
//PI
 const PI =3.14159;
//Exportamos la función//
export {contar,saludar};