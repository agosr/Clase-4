/* 
Agostina Rosano
Camada 2390
Trabajo Práctico clase 4
# Crear una funcion que agregue objetos peliculas
- El objeto pelicula Debera tener ID, titulo, descripcion, año, duracion, actores, director
- Debera tener metodos para editar todas sus propiedades, menos su ID, y para los actores tendra que ir agregando 
uno a uno
*/

//constructor
var Pelicula = function(id, titulo, descripcion, anio, duracion, actores, director){
  this.id = 0
  this.titulo = function() {
      this.titulo = prompt("Ingrese un titulo")
  }
  this.descripcion = function() {
      this.descripcion = prompt("Ingrese una descripcion")
  }
  this.anio = function() {
      this.anio = prompt("Ingrese un anio")
  }
  this.duracion = function() {
      this.duracion = prompt("Ingrese la duracion")
  }
  this.actores = function() {
    this.actores = prompt("Ingrese actores") 
  }
  this.director = function() {
    this.director = prompt("Ingrese un director")
  }
}

//contenedor de peliculas
var videoclub = []

//funcion para agregar las peliculas, le pide al usuario que ingrese la informacion y la agrega a videoclub
var idNumero = 0
var pregunta = prompt("¿quieres agregar una pelicula?") 
var agregarVideoclub = function(){
  if (pregunta == "si"){
  idNumero++
  var agregarPelicula = new Pelicula ()
  agregarPelicula.id = idNumero
  agregarPelicula.titulo()
  agregarPelicula.descripcion()
  agregarPelicula.anio()
  agregarPelicula.duracion()
  agregarPelicula.actores()
  agregarPelicula.director()
  videoclub.push(agregarPelicula)
  
}
  else  {
    alert("¡adios!")
  }
}
var agregarOtra = function(){
  do {
    var pregunta2 = prompt("¿quieres agregar otra pelicula?")
    if (pregunta2 == "si"){
      agregarVideoclub()
    }
  
    else  {
      alert("¡adios!")
    }
  }
  while (idNumero > 0 && pregunta2 == "si" )
}   

agregarVideoclub()
agregarOtra()

console.log(videoclub)

