const one = document.querySelector('#one')
const two = document.querySelector('#two')
const third = document.querySelector('#third')
const fourth = document.querySelector('#fourth')
const key = document.querySelector('#key')
const container = document.querySelector('.container')

document.addEventListener('DOMContentLoaded', () => {
  createBoxProps(one, 'blue')
  createBoxProps(two, 'red')
  createBoxProps(third, 'pink')
  createBoxProps(fourth, 'yellow')
  createBoxProps(key, 'white')

  one.addEventListener('click', () => {
    createBoxProps(one, 'black', 'update')
  })
  two.addEventListener('click', () => {
    createBoxProps(two, 'black', 'update')
  })
  third.addEventListener('click', () => {
    createBoxProps(third, 'black', 'update')
  })
  fourth.addEventListener('click', () => {
    createBoxProps(fourth, 'black', 'update')
  })
})


const createBoxProps = (ele, color, action = 'create') => {
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
  if (e.key === 'a') { createBoxProps(key, 'pink', 'update') }
  if (e.key === 's') { createBoxProps(key, 'orange', 'update') }
  if (e.key === 'd') { createBoxProps(key, 'aqua', 'update') }
}

createBox = (e) => {
  let color = ''
  if (e.key === 'q') { color = 'purple' }
  if (e.key === 'w') { color = 'gray' }
  if (e.key === 'e') { color = 'brown' }
  if (!color) return
  const box = document.createElement('div')
  box.setAttribute('id', 'box')
  createBoxProps(box, color)
  container.appendChild(box)
}
document.addEventListener('keydown', (event) => {
  onKeyboardEvent(event, 'create')
  onKeyboardEvent(event, 'update')
})