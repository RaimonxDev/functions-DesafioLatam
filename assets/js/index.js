const box1 = document.querySelector('#one')
const box2 = document.querySelector('#two')
const box3 = document.querySelector('#third')
const box4 = document.querySelector('#fourth')
const boxKey = document.querySelector('#key')


function cambiarColor(box, color, borderColor) {
  box.style.border = `1px solid ${borderColor}`
  box.style.backgroundColor = color
}

function dimensiones(elementoHtml, alto = '200px', ancho = '200px') {
  elementoHtml.style.height = alto
  elementoHtml.style.width = ancho
}
// box1
dimensiones(box1)
cambiarColor(box1, 'blue')

// box 2
dimensiones(box2)
cambiarColor(box2, 'red')

// box 3
dimensiones(box3)
cambiarColor(box3, 'green')

// box 4 
dimensiones(box4)
cambiarColor(box4, 'yellow')

dimensiones(boxKey)
cambiarColor(boxKey, 'white', 'black')


//box1.addEventListener('click' , function() {})
box1.addEventListener('click', () => {
  cambiarColor(box1, 'black')
})
box2.addEventListener('click', () => {
  cambiarColor(box2, 'black')
})
box3.addEventListener('click', () => {
  cambiarColor(box3, 'black')
})
box4.addEventListener('click', () => {
  cambiarColor(box4, 'black')
})

// DIV KEY 3.3
const creacion = (letra, box) => {
  if (letra === 'a') {
    cambiarColor(box, 'pink')
  }
  if (letra === 's') {
    cambiarColor(box, 'orange')
  }
  if (letra === 'd') {
    cambiarColor(box, 'skyblue')
  }
}

const container = document.querySelector('.container')

const createDiv = (letra) => {
  if (letra === 'q') {
    const div = document.createElement('div')
    dimensiones(div)
    cambiarColor(div, 'purple')
    container.appendChild(div)
  }
  if (letra === 'w') {
    const div = document.createElement('div')
    dimensiones(div)
    cambiarColor(div, 'gray')
    container.appendChild(div)
  }
  if (letra === 'e') {
    const div = document.createElement('div')
    dimensiones(div)
    cambiarColor(div, 'brown')
    container.appendChild(div)
  }
}

document.addEventListener('keydown', function (event) {
  creacion(event.key, boxKey)
  createDiv(event.key)
})



