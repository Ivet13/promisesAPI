
// actua de callback
function sumar (numero1, numero2) {
  return numero1 + numero2
}

function calcular (numero1, numero2, callback) {
  return callback(numero1, numero2)
}

console.log(calcular(10, 20, sumar))

/* FECHAS */

// imprime la fecha, espera 3 segundos y
// vuelve a imprimir la fecha
function fecha (callback) {
  console.log(new Date())

  setTimeout(function () {
    // const date = new Date()
    callback(new Date())
  }, 3000)
}

// funcion que hace de callback
function imprimirFecha (dateNow) {
  console.log(dateNow)
}

fecha(imprimirFecha)
