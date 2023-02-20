// i nicio 
let ronda = 0;

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

    // Player //
    do {
        player = prompt(" escribe 0 para piedra, 1 para papel, 2 para tijeras ");
    } while (player < 0 || player >= 3);

    if (player == 0) {
        alert(" Jugaste piedra ");
    } else if (player == 1) {
        alert(" jugaste papel ");
    } else if (player == 2) {
        alert(" jugaste tijeras ");
    };

    // bot1 

    if (bot1 == 0) {
        alert(" bot1 jugo piedra ");
    } else if (bot1 == 1) {
        alert(" bot1 jugo papel ");
    } else if (bot1 == 2) {
        alert(" bot1 jugo tijeras ");
    };

    // validar //

    if (player == bot1) {
        alert(" Empate ")
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

//////////////////////////////////////////////////////////////////////////////////////////////

// Welcome Hardmode //

const btwhardmode = () => {
    let player = 0;
    let Hard = 0;
    ronda += 1;
    console.log (ronda)
    // player
    do {
        player = prompt(" escribe 0 para piedra, 1 para papel, 2 para tijeras ");
    } while (player < 0 || player >= 3);

    if (player == 0) {
        alert(" Jugaste piedra ");
    } else if (player == 1) {
        alert(" jugaste papel ");
    } else if (player == 2) {
        alert(" jugaste tijeras ");
    };
    // hard //
    if (player == 0) {
        Hard = 1
        alert(" script jugo papel ")
    } else if (player == 1) {
        Hard = 2
        alert(" script jugo tijeras ")
    } else if (player == 2) {
        Hard = 0
        alert(" script jugo piedra ")
    }
    /*
    // Bot1 //
    
    if (bot1 == 0) {
        alert(" bot1 jugo piedra ");
    } else if (bot1 == 1) {
        alert(" bot1 jugo papel ");
    } else if (bot1 == 2) {
        alert(" bot1 jugo tijeras ");
    };
    */

    //validar

    if (player == Hard) {
        alert(" Empate ")
        btwhardmode ();
    } else if (player == 0 && Hard == 2) {
        alert(" felicidades gano ");
    } else if (player == 1 && Hard == 0) {
        alert(" felicidades gano ");
    } else if (player == 2 && Hard == 1) {
        alert(" felicidades gano ");
    } else if (ronda == 3) {
        alert(" perdiste vete al modo normal ");
        console.log(ronda)
        btnnormal (); 
    } else {
      alert("perdiste")
      btwhardmode ();
    }
};

                            //Lista de cosas por soluccionar o agregar//
// 01 agregar dificultad dificil y facil 
// 02 pixel art ( ni idea como voy hacer esta weba);
// 03 crear tabla de puntos con nombres 
// 04 base de datos para guardar puntages
// 05 agregar login y registro para complementar sistema de puntajes 
// 06 hacer multijugador local 
// pagina del index pagina funcionalidad del login / registro 
// colocar insultos a moises 