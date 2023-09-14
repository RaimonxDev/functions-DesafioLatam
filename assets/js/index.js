// Construye una página web 4_colores.html con las siguientes características(Total:
//   5 puntos)
// ● Crea 4 divs que tengan alto y ancho de 200px y de colores azul, rojo, verde y
// amarillo(insertar estilos con atributo style).Cada uno de los divs debe tener
// un identificador único. (1 Punto)
// ● Dentro del script agrega el evento para que al hacer click a cada uno de los
// divs, este cambie de color al color negro.Utiliza addEventListener para
// agregar el evento. (1 Punto)
// _ 2
// www.desafiolatam.com
// ● Crea una página junto a un script que guarde dentro de una variable global
// un color dependiendo de la letra del teclado presionada. (2 Puntos).
// ○ La letra a guardará el color rosado.
// ○ La letra s guardará el color naranjo.
// ○ La letra d guardará el color celeste.
// ○ Para guardar el color revisa el tip al final del enunciado.
// ○ Crea un nuevo div con el id “key”, de 200 px de ancho y alto y de
// color blanco y borde negro.
// ○ Al presionar las teclas a, s o d, se deberá cambiar el color del div
// “key” a rosado, naranjo o celeste respectivamente.
// ● Siguiendo con la lógica del punto anterior, al presionar las teclas q, w o e se
// deberá crear un div nuevo de las mismas dimensiones antes mencionadas
// con los colores morado, gris y café respectivamente. (1 Punto)

const one = document.querySelector('#one')
const two = document.querySelector('#two')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
const key = document.querySelector('#key')


document.addEventListener('DOMContentLoaded', () => {
  createProperties(one, 'blue')
  createProperties(two, 'red')
  createProperties(third, 'pink')
  createProperties(fourth, 'yellow')
  createProperties(key, 'white')

  one.addEventListener('click', () => {
    createProperties(one, 'black', 'update')
  })
  two.addEventListener('click', () => {
    createProperties(two, 'black', 'update')
  })
  third.addEventListener('click', () => {
    createProperties(third, 'black', 'update')
  })

  fourth.addEventListener('click', () => {
    createProperties(fourth, 'black', 'update')
  })
})




const createProperties = (ele, color, action = 'create') => {
  if (action === 'update') {
    return ele.style.backgroundColor = color
  }
  ele.style.height = '200px'
  ele.style.width = '200px'
  ele.style.backgroundColor = color
  ele.style.borderRadius = '0.5rem'
}

const changeColorByKey = (e) => {
  const key = e.key
  const color = getColorByKey(key)
  createProperties(key, color, 'update')
}

const getColorByKey = (key) => {
  const colors = {
    a: 'pink',
    s: 'orange',
    d: 'blue',
    q: 'purple',
    w: 'gray',
    e: 'brown'
  }
  return colors[key]
}
document.addEventListener('keydown', changeColorByKey)