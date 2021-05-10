
// Esta funcion convierte codigo morse a texto
function Morse(codigoMorse) {
    var diccionario = {
        '.----':'1', '..---':'2', '...--':'3', '....-':'4', '.....':'5',
        '-....':'6', '--...':'7', '---..':'8', '----.':'9', '-----':'0', 
        '.-':   'a', '-...': 'b', '-.-.': 'c', '-..':  'd', '.':    'e',
        '..-.': 'f', '--.':  'g', '....': 'h', '..':   'i', '.---': 'j',  
        '-.-':  'k', '.-..': 'l', '--':   'm', '-.':   'n',  '---': 'o', 
        '.--.': 'p', '--.-': 'q', '.-.':  'r', '...':  's', '-':    't',
        '..-':  'u', '...-': 'v',  '.--': 'w', '-..-': 'x', '-.--': 'y',
        '--..': 'z', '.-.-.-':'.','--..--':',','-.-.-.':';','---...':':', 
        '--...-':'¡','-.-.--':'!','..-.-': '¿','..--..':'?'
    };

    return codigoMorse

        // Convertimos de codigo morse a texto
        .split('  ')
        .map( palabra => palabra.split(' ')

            .map( letra => diccionario[letra]).join('')
        ).join(' ');  
}

// Funcion que recibe el mensaje digitado por el usuario en codigo morse
var obtenerDatosMorse = function () {

    let cadenaMorse = document.getElementById('morse_texto').value;

    if (cadenaMorse == "") {
        document.getElementById('morse_texto').focus();

    } else {
        let decodificarMorse = Morse(cadenaMorse);
        
        document.getElementById('morse_texto').value = "";

        // mostramos el resultado convertido a texto
        console.log(decodificarMorse);
        // document.write(decodificarMorse + "<br>");
        alert("El resultado es: " + decodificarMorse);   
    }

}

// funcion que convierte de texto a codigo morse
function Texto(codigoTexto) {
    let diccionario = {
        '1':'.----', '2':'..---', '3':'...--', '4':'....-', '5':'.....',
        '6':'-....', '7':'--...', '8':'---..', '9':'----.', '0':'-----', 
        'a':   '.-', 'b': '-...', 'c': '-.-.', 'd':  '-..', 'e':    '.',
        'f': '..-.', 'g':  '--.', 'h': '....', 'i':   '..', 'j': '.---',  
        'k':  '-.-', 'l': '.-..', 'm':   '--', 'n':   '-.', 'o':  '---', 
        'p': '.--.', 'q': '--.-', 'r':  '.-.', 's':  '...', 't':    '-',
        'u':  '..-', 'v': '...-', 'w':  '.--', 'x': '-..-', 'y': '-.--',
        'z': '--..', '.':'.-.-.-',',':'--..--',';':'-.-.-.',':':'---...', 
        '¡':'--...-','!':'-.-.--','¿':'..-.-', '?':'..--..'
    };

    return codigoTexto

        // convertimos de texto a codigo morse
        .split(' ')
        .map( palabra => palabra.split('')

            .map( letra => diccionario[letra]).join(' ')
        ).join('  ');  
}

// funcion que recibe el mensaje digitado por el usuario en texto
var obtenerDatosTexto = function () {

    let cadenaTexto = document.getElementById('texto_morse').value;

    if (cadenaTexto == "") {
        document.getElementById('texto_morse').focus();

    } else {
        let codificarMorse = Texto(cadenaTexto);

        document.getElementById('texto_morse').value = "";

        // mostramos el resultado convertido a codigo morse
        console.log(codificarMorse);
        // document.write(codificarMorse + "<br>");
        alert("El resultado es: " + codificarMorse);
    }

}