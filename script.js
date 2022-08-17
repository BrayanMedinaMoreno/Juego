// i nicio 

alert("seleccione dificultad");

const AunNoImplementada = () => {
    alert (" Funcionalidad aun no implementada se le mandara a la dificultad normal ");
    btnnormal ()
};

const btnnormal = () => {
    //Varbot1bles 
    //let bot1 = ["1","2","3"]
    let player = 0;
    let bot1 = Math.round(Math.random(0,1,2)*2);
    //console.log (bot1);

    // player
    do {
        player = prompt(" escribe 0 para piedra, 1 para papel, 2 para digeras ");
    } while (player < 0 || player >= 3);

    if (player == 0) {
        alert(" Jugaste piedra ");
    } else if (player == 1) {
        alert(" jugaste papel ");
    } else if (player == 2) {
        alert(" jugaste tigeras ");
    };

    // bot1 

    if (bot1 == 0) {
        alert(" bot1 jugo piedra ");
    } else if (bot1 == 1) {
        alert(" bot1 jugo papel ");
    } else if (bot1 == 2) {
        alert(" bot1 jugo tigeras ");
    };

    //validar

    if (player == bot1) {
        alert(" Empate pirobo ")
        btnnormal ();
    } else if (player == 0 && bot1 == 2) {
        alert(" felicidades gano ");
    } else if (player == 1 && bot1 == 0) {
        alert(" felicidades gano ");
    } else if (player == 2 && bot1 == 1) {
        alert(" felicidades gano ");
    } else {
        alert(" perdiste ");
        btnnormal (); 
    };
};

                            //Lista de cosas por soluccionar o agregar//
// 01 agregar dificultad dificil y facil 
// 02 pixel art ( ni idea como voy hacer esta weba);
// 03 crear tabla de puntos con nombres 
// 04 base de datos para guardar puntages
// 05 agregar login y registro para complementar sistema de puntages 
// 06 hacer multijugador local 
// pagina del index pagina funcionalidad del login / registro 
// colocar insultos a moises 