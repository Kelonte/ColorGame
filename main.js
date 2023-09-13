let colores = [];
let botones = [];
let central;
let correcto = "";
let facil = false;
let playing = true;
let chime = new Audio("http://sonidosmp3gratis.com/sounds/rightchime1.mp3");
let click = new Audio("http://sonidosmp3gratis.com/sounds/Computer_Mouse_Click_01_Sound_Effect_Mp3_339.mp3");
let clap = new Audio("http://sonidosmp3gratis.com/sounds/clapping.mp3");

function generarColor() {
    let rojo =  Math.floor(Math.random()*255)+1
    let verde =  Math.floor(Math.random()*255)+1
    let azul =  Math.floor(Math.random()*255)+1
    return "rgb(" + rojo + ", " + verde + ", " + azul + ")";
}

function generarCuadros() {
    if(facil) {
        correcto = Math.floor(Math.random()*2);
        document.querySelector(".contenedor2").style = "display : none";
    } else {
        correcto = Math.floor(Math.random()*5);
        document.querySelector(".contenedor2").style = "display : visible";
    }
    for(i = 0; i < colores.length; i++){
        colores[i].style.backgroundColor = generarColor();
        colores[i].addEventListener("click", verColor);
        central = document.querySelector(".central");
        central.textContent = colores[correcto].style.backgroundColor.toUpperCase();
        document.querySelector("#fondoTextos").style.backgroundColor = "#4682B4";
    }
}

function ganaste() {
    playing = false;
    clap.pause();
    clap.currentTime = 0; 
    clap.play();
    for(i = 0; i < colores.length; i++){
        colores[i].style.backgroundColor = central.textContent;
        document.querySelector("#fondoTextos").style.backgroundColor = central.textContent;
        document.querySelector("#new").textContent = "PLAY AGAIN!";
        texto.textContent = "Correct!";
    }
}

function verColor() {
    if(playing){
        if(this.style.backgroundColor.toUpperCase() == central.textContent){
            ganaste();
        } else {
            chime.pause();
            chime.currentTime = 0;
            chime.play();
            this.style.backgroundColor = "#232323";
            texto.textContent = "Try Again";
        }
    }
}

function verBoton() {
    click.play();
    switch (this.id) {
        case "new":
            generarCuadros();
            break
        case "easy":
            facil = true;
            easy.style.backgroundColor = "#4682B4";
            easy.style.color = "white";
            hard.style.backgroundColor = "white";
            hard.style.color = "#4682B4";
            generarCuadros();
            break
        case "hard":
            facil = false;
            hard.style.backgroundColor = "#4682B4";
            hard.style.color = "white";
            easy.style.backgroundColor = "white";
            easy.style.color = "#4682B4";
            generarCuadros();
            break
    }
    document.querySelector("#new").textContent = "NEW COLORS";
    texto.textContent = "";   
    playing = true;
}

easy = document.querySelector("#easy");
hard = document.querySelector("#hard");
colores = document.querySelectorAll(".cuadro");
botones = document.querySelectorAll(".btn");
texto = document.querySelector(".texto");

for(i = 0; i < botones.length; i++){
    botones[i].addEventListener("click", verBoton);
}

hard.style.backgroundColor = "#4682B4";
hard.style.color = "white";

generarCuadros();

