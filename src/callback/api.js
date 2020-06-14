'use strict'

// https://rickandmortyapi.com/api/character/
// SIN jQuery

// instanciamos la dependencia con require
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest
const API = 'https://rickandmortyapi.com/api/character/'

// llamar/instanciar la dependencia a través de require

function traerDatos (url_api, callback) {
  // instanciamos de XMLHttpRequest
  const xhttp = new XMLHttpRequest()
  // con true, activamos el asincronismo en xmlhttprequest
  xhttp.open('GET', url_api, true)
  // escuchamos, si este cambio sucede
  xhttp.onreadystatechange = function (event) {
    // aqui creamos una validación para ver si ejecutamos nuestro callback
    // hay diferentes estados. El 4 es que ha sido completado el request
    if (xhttp.readyState === 4) {
      // validadmos si es correcta la petición del servidor
      if (xhttp.status === 200) {
        // ahora si todo esta bien
        // parseamos el JSON y mandamos a través del callback los datos
        callback(null, JSON.parse(xhttp.responseText))
      } else {
        // sino algo esta mal, mandamos un error con nuestro callback
        const error = new Error('Error ' + url_api)
        return callback(error, null)
      }
    }
  }
  // utilizamos el método send
  xhttp.send()
}

traerDatos(API, function (error1, data1) {
  if (error1) return console.error(error1)
  traerDatos(API + data1.results[0].id, function (error2, data2) {
    if (error2) return console.error(error2)
    traerDatos(data2.origin.url, function (error3, data3) {
      if (error3) return console.error(error3)
      // hacemos las tres peticiones a la api
      // asi como vimos en otro ejemplo podemos encadenar lo callabacks para estas tres peticiones a la api
      // tres peticiones ok, pero no llegar al callbackHELL
      console.log(data1.info.count)
      console.log(data2.name)
      console.log(data3.dimension)
    })
  })
})
