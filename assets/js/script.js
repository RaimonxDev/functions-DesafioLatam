const pintar = (target, color = 'green') => {
  target.style.backgroundColor = color;
}
const ele = document.getElementById("ele1")

ele.addEventListener("click", () => pintar(ele, 'yellow'));