/* Los objetos no son ITERABLES */

const persona1 = {
  name: 'samuel',
  age: 13,
  height: 1.8,
  gender: 'male',
  isAlive: true,
  foodType: ['frutas', 'verduras', 'semillas', 'etc'],
  eyes: { color: 'brown', shape: 'big' },
  dormir: function () {
    console.log('estoy durmiendo')
  },
  comer: function () {
    console.log('estoy comiendo...')
  }
}

/* forma 1 de acceder a un objeto usando el punto */
console.log('color de ojos:', persona1.eyes.color),

/* orma 2 de acceder a un objeto usando un corchete */
console.log('color de ojos:', persona1.eyes(['color'])),

/* asi se llaman las funciones, abriendo y cerrado con parentesis
siempre y cuando en la constante tengamos la funcion activadda */
persona1.comer()
persona1.dormir()
