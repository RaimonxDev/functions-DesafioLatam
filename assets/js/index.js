const one = document.querySelector('#one')
const two = document.querySelector('#two')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
const key = document.querySelector('#key')
const container = document.querySelector('.container')

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
  ele.style.border = color === 'white' ? '1px solid #000' : 'none'
}

const onKeyboardEvent = (e, action) => {
  action === 'create' ? createBox(e) : updateColor(e)
}

updateColor = (e) => {
  if (e.key === 'a') { createProperties(key, 'pink', 'update') }
  if (e.key === 's') { createProperties(key, 'orange', 'update') }
  if (e.key === 'd') { createProperties(key, 'aqua', 'update') }
}

createBox = (e) => {
  let color = ''
  if (e.key === 'q') { color = 'purple' }
  if (e.key === 'w') { color = 'gray' }
  if (e.key === 'e') { color = 'brown' }
  if (!color) return
  const box = document.createElement('div')
  box.setAttribute('id', 'box')
  createProperties(box, color)
  container.appendChild(box)
}
document.addEventListener('keydown', (event) => {
  onKeyboardEvent(event, 'create')
  onKeyboardEvent(event, 'update')
})