let canvasContainer = document.getElementById("stockGraph");
const btn_decrease_size = document.getElementById('btn_decrease_size')
const btn_set_size = document.getElementById('btn_set_size')
const btn_increase_size = document.getElementById('btn_increase_size')
const btn_change_color = document.getElementById('btn_change_color')

let isPressed = false;
let originX = 0
let originY = 0
let draw_size = parseInt(btn_set_size.textContent)


btn_increase_size.addEventListener('click', e => {
  if (draw_size < 100){
    draw_size = draw_size + 5
    btn_set_size.textContent = draw_size
  }
})

btn_decrease_size.addEventListener('click', e => {
  if (draw_size > 5){
    draw_size = draw_size - 5
    btn_set_size.textContent = draw_size
  }
})


canvasContainer.addEventListener('mousedown', (e)=>{
  isPressed = true
  originX = e.offsetX
  originY = e.offsetY
})

canvasContainer.addEventListener('mouseup', (e)=>{
  isPressed = false
})

canvasContainer.addEventListener('mousemove', e =>{
  if(isPressed){
    const c = canvasContainer.getBoundingClientRect()
    let x = e.clientX - c.left
    let y = e.clientY - c.top
    drawCircle(x,y)
    drawLine(originX,originY,x,y)
    originX = x
    originY = y
  }

})

function drawCircle(arcX,arcY){
  let ctx = canvasContainer.getContext('2d')
  ctx.beginPath()
  ctx.fillStyle = btn_change_color.value
  const radius = draw_size; // Radio del Arco
  const startAngle = 0; // Punto inicial del Círculo
  const endAngle = Math.PI *2; // Punto final del Círculo
  const counterclockwise = 1 % 2 !== 0; // En el
  ctx.arc(arcX, arcY, radius, startAngle, endAngle, counterclockwise);
  ctx.fill()
}

function drawLine(originX,originY, arcX, arcY){
  let ctx = canvasContainer.getContext('2d')
  ctx.beginPath()
  ctx.strokeStyle =  btn_change_color.value
  ctx.moveTo(originX,originY)
  ctx.lineTo(arcX, arcY)
  ctx.lineWidth = draw_size *2 ;
  ctx.closePath()
  ctx.stroke()

}