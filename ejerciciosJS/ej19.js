let Trabajo = prompt("Tienes trabajo hoy?");
let BuenTiempo = prompt("Hace buen tiempo?");

if (Trabajo == si || Trabajo == SI || Trabajo == sI || Trabajo == Si){
    Trabajo = true;
}else{
    Trabajo = false;
}

if (BuenTiempo == si || BuenTiempo == SI || BuenTiempo == sI || BuenTiempo == Si){
    BuenTiempo = true;
}else{
    BuenTiempo = false;
}

if(BuenTiempo === true && Trabajo === false){
    console.log("Puedes ir a la playa.");
}else{
    console.log("No puedes ir a la playa.");
}
