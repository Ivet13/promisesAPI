'use strict'

// SIN jQuery

// instanciamos la dependencia con require
var XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest

// guardamos en una constatne la URL de la API
const API = 'https://rickandmortyapi.com/api/character/'

// para poder cambiar el valor del id al obtener los caracteres, usamos una variable
const CHARACTER_ID = ':id'

function obtenerCaracter (id) {
  // primero meteomos el id deseado en la URL
  const url = `${API}${CHARACTER_ID.replace(':id', id)}`
  // instanciamos nuevo objeto de tipo request
  const xhttp = new XMLHttpRequest()
  // abrimos la coneccion a la API
  xhttp.open('GET', url, true)
  // enviamos el request
  xhttp.send()
  // cuando nos llegue la respuesta, confirmamos su estado
  xhttp.onreadystatechange = function () {
    // nuestra funcion va a devolver el objeto pedido mediante un objeto de tipo promesa
    return new Promise(function (resolve, reject) {
      if (xhttp.readyState === 4) {
        if (xhttp.status === 200) {
        // si todo bien, sacamos los datos del objeto JSON mediante nuestro resolve
          resolve(JSON.parse(xhttp.responseText))
        } else {
        // si ha habido un error, lo devolvemos mediante reject
          const error = new Error('Error ' + url)
          return reject(error)
        }
      }
    })
      .then((respuesta) => {
        console.log(`Hola mi nombre es ${respuesta.name}, mi especie es ${respuesta.species}, provengo de ${respuesta.origin.name}.\n`)
      })
      .catch((error) => {
        console.error(error)
      })
  }
}

obtenerCaracter(100)
