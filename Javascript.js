function cmd(comando) {
    document.execCommand(comando, false, null);
}

function cmdValue(comando, valor) {
    document.execCommand(comando, false, valor);
}

function limpiar() {
    document.getElementById("editor").innerHTML = "";
}

function copiar() {
    let texto = document.getElementById("editor").innerText;
    navigator.clipboard.writeText(texto);
    alert("Texto copiado")
}

async function pegar(){
    let textoPegar = await navigator.clipboard.readText()
    document.getElementById("editor").innerText += textoPegar
}

function cortar(){
    let texto = document.getElementById("editor").innerText;
    navigator.clipboard.writeText(texto);
    document.getElementById("editor").innerText = ""
}

/* 
   Lo que edita texto
*/

function esEspacioONuevaLinea(c) {
    return c === " " || c === "\n";
}

function esVocal(c) {
    let vocales = "aeiouAEIOU";
    for (let i = 0; i < vocales.length; i++) {
        if (c === vocales[i]) return true;
    }
    return false;
}

function esLetra(c) {
    return (c >= "A" && c <= "Z") || (c >= "a" && c <= "z");
}

function esConsonante(c) {
    return esLetra(c) && !esVocal(c);
}

function esDigito(c) {
    return c >= "0" && c <= "9";
}

function esPuntuacion(c) {
    let signos = ".,;:!?¿¡\"";
    for (let i = 0; i < signos.length; i++) {
        if (c === signos[i]) return true;
    }
    return false;
}

/* 
   Las funciones texto
*/

function contarPalabras(texto) {
    let palabras = 0;
    let dentro = false;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (!esEspacioONuevaLinea(c) && !dentro) {
            palabras++;
            dentro = true;
        } else if (esEspacioONuevaLinea(c)) {
            dentro = false;
        }
    }
    return palabras;
}

function contarPuntuacion(texto) {
    let t = 0;
    for (let i = 0; i < texto.length; i++) {
        if (esPuntuacion(texto[i])) t++;
    }
    return t;
}

function contarVocales(texto) {
    let v = 0;
    for (let i = 0; i < texto.length; i++) {
        if (esVocal(texto[i])) v++;
    }
    return v;
}

function contarConsonantes(texto) {
    let c = 0;
    for (let i = 0; i < texto.length; i++) {
        if (esConsonante(texto[i])) c++;
    }
    return c;
}

function contarDigitos(texto) {
    let d = 0;
    for (let i = 0; i < texto.length; i++) {
        if (esDigito(texto[i])) d++;
    }
    return d;
}

function contarMayusInicial(texto) {
    let cont = 0;
    let dentro = false;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (!esEspacioONuevaLinea(c) && !dentro) {
            if (c >= "A" && c <= "Z") cont++;
            dentro = true;
        } else if (esEspacioONuevaLinea(c)) {
            dentro = false;
        }
    }
    return cont;
}

function contarMinusInicial(texto) {
    let cont = 0;
    let dentro = false;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (!esEspacioONuevaLinea(c) && !dentro) {
            if (c >= "a" && c <= "z") cont++;
            dentro = true;
        } else if (esEspacioONuevaLinea(c)) {
            dentro = false;
        }
    }
    return cont;
}

function contarParrafos(texto) {
    let parrafos = 0;
    let tieneTexto = false;

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c !== "\n" && c !== " ") {
            tieneTexto = true;
        }

        if (c === "\n") {
            if (tieneTexto) {
                parrafos++;
            }
            tieneTexto = false;
        }
    }

    if (tieneTexto) {
        parrafos++;
    }

    return parrafos;
}

function invertirTexto(texto) {
    let resultado = "";
    let linea = "";

    for (let i = 0; i < texto.length; i++) {
        let c = texto[i];

        if (c === "\n") {
            
            let invertida = "";
            for (let j = linea.length - 1; j >= 0; j--) {
                invertida += linea[j];
            }
            resultado += invertida + "\n";
            linea = "";
        } else {
            linea += c;
        }
    }

    let invertida = "";
    for (let j = linea.length - 1; j >= 0; j--) {
        invertida += linea[j];
    }
    resultado += invertida;

    return resultado;
}

function contarCaracteresSinSaltos(texto) {
    let c = 0;
    for (let i = 0; i < texto.length; i++) {
        if (texto[i] !== "\n") c++;
    }
    return c;
}

function encontrarPalabra(texto){
    let palabras = [];
    let palabraActual = "";
    for (let i = 0; i < texto.length; i++) {
        let caracter = texto[i];
        if (caracter !== " ") {
            palabraActual += caracter;
        } else {
            if (palabraActual.length > 0) {
                palabras.push(palabraActual);
                palabraActual = "";
            }
        }
    }
    if (palabraActual.length > 0) {
        palabras.push(palabraActual);
    }
    let palabra = prompt("Ingrese la palabra a buscar:");
    let encontrada = "No";
    for (let i = 0; i < palabras.length; i++) {
        if (palabras[i] === palabra) {
            encontrada = "Si";
        }
    }
    return encontrada
}

function contadorAparicionesCaracter (texto) {
    let caracter = "", numeroApariciones = 0;
    texto = texto.toLowerCase()
    caracter = prompt (`Ingrese el caracter a contar en: ${texto}`);
    caracter = caracter.toLowerCase()
    if (caracter.length === 1){
        for (let i = 0; i < texto.length; i++){
            if (caracter === texto[i]){
                numeroApariciones++;
            }
        }
        if (numeroApariciones <= 0){
            numeroApariciones = "El caracter no aparece en el texto"
        }
    } else {
        numeroApariciones = "Ingresar solo un caracter"
    }
    return numeroApariciones
}

function contadorCaracteresPares(texto){
    let numeroCaracteres = 0; c = 1
    for (let i = 0; i < texto.length; i++){
        if (texto[i] !== "\n" && c % 2 === 0){
           numeroCaracteres++;
        }
        c++
    }
    return numeroCaracteres
}

function contadorCaracteresImpares(texto){
    let numeroCaracteres = 0; c = 1
    for (let i = 0; i < texto.length; i++){
        if (texto[i] !== "\n" && c % 2 !== 0){
           numeroCaracteres++;
        }
        c++
    }
    return numeroCaracteres
}

function agregarFragmento(texto) {
    let fragmento = prompt("Ingrese el fragmento a agregar:");
    let inicio = [];
    for (let i = 0; i < fragmento.length; i++) {
        inicio.push(fragmento[i]);
    }
    inicio.push(" ");
    for (let i = 0; i < texto.length; i++) {
        inicio.push(texto[i]);
    }
    let final = [];
    for (let i = 0; i < texto.length; i++) {
        final.push(texto[i]);
    }
    final.push(" ");
    for (let i = 0; i < fragmento.length; i++) {
        final.push(fragmento[i]);
    }
    let textoInicio = "";
    for (let i = 0; i < inicio.length; i++) {
        textoInicio += inicio[i];
    }

    let textoFinal = "";
    for (let i = 0; i < final.length; i++) {
        textoFinal += final[i];
    }
    let salida = "Texto con fragmento al inicio: " + textoInicio + "\n" +
                 "Texto con fragmento al final: " + textoFinal;

    return salida
}

/* 
   Salida del analizador
*/

function analizar() {
    const texto = document.getElementById("editor").innerText;

    let salida =
        "Palabras: " + contarPalabras(texto) + "\n" +
        "Signos de puntuación: " + contarPuntuacion(texto) + "\n" +
        "Vocales: " + contarVocales(texto) + "\n" +
        "Consonantes: " + contarConsonantes(texto) + "\n" +
        "Dígitos: " + contarDigitos(texto) + "\n" +
        "Palabras con mayúscula inicial: " + contarMayusInicial(texto) + "\n" +
        "Palabras con minúscula inicial: " + contarMinusInicial(texto) + "\n" +
        "Párrafos: " + contarParrafos(texto) + "\n" +
        "Texto invertido: " + invertirTexto(texto) + "\n" +
        "Total de caracteres: " + contarCaracteresSinSaltos(texto) + "\n" +
        "Existe la palabra: " + encontrarPalabra(texto) + "\n" +
        "Número de veces que aparece el caracter: " + contadorAparicionesCaracter(texto) + "\n" +
        "Caracteres Pares: " + contadorCaracteresPares(texto) + "\n" +
        "Caracteres Impares: " + contadorCaracteresImpares(texto) + "\n" +
        agregarFragmento(texto) 
    document.getElementById("resultados").innerText = salida;
}