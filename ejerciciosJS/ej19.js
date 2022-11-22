let Trabajo = prompt("Tienes trabajo hoy?");
let BuenTiempo = prompt("Hace buen tiempo?");

if (Trabajo == 'si' || Trabajo == 'SI' || Trabajo == 'sI' || Trabajo == 'Si'){
    Trabajo = true;
}else{
    Trabajo = false;
}

if (BuenTiempo == 'si' || BuenTiempo == 'SI' || BuenTiempo == 'sI' || BuenTiempo == 'Si'){
    BuenTiempo = true;
}else{
    BuenTiempo = false;
}

if(BuenTiempo === true && Trabajo === false){
    console.log("Puedes ir a la playa.");
}else if(BuenTiempo === false)
{
    console.log("No puedes ir a la playa, hoy toca estar en casita.");
}else if (Trabajo === true) {
    console.log("Hoy toca ir a trabajar.");
}
