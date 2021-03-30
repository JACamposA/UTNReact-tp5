// Esto es solo para que el console aparezca en pantalla, tomado de https://stackoverflow.com/questions/20256760/javascript-console-log-to-html

(function () {
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function () {
      for (var i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(arguments[i], undefined, 2) : arguments[i]) + '<br />';
        } else {
            logger.innerHTML += arguments[i] + '<br />';
        }
      }
    }
})();

//Ahora si el código del tp

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const diasdelMes = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

for(let i = 0; i < 12; i++) {
    if(diasdelMes[i] == 31) {
        console.log (meses[i] + " tiene 31 días");
    }
}
console.log ("-----------------------------")
for(let i = 0; i < 12; i++) {
    if(diasdelMes[i] == 30) {
        console.log ( meses[i]+ " tiene 30 días");
    }
}
console.log ("-----------------------------")
for(let i = 0; i < 12; i++) {
    if(diasdelMes[i] == 28) {
        console.log ( meses[i]+ " tiene 28 días");
    }
}
