let canvasContainer = document.getElementById("stockGraph");

let isPressed = false;
let originX = 0
let originY = 0
function draw() {
    if (canvasContainer.getContext) {
        let ctx = canvasContainer.getContext("2d");
        // ctx.beginPath();
        // ctx.arc(75, 75, 50, 0, Math.PI*2, true); // Círculo externo
        // ctx.moveTo(110, 75);
        // ctx.arc(75, 75, 35, 0, Math.PI, ); // Boca (en el sentido de las agujas del reloj)
        // ctx.moveTo(65, 65);
        // ctx.arc(60, 65, 5, 0, Math.PI * 2, true); // Ojo izquierdo
        // ctx.moveTo(95, 65);
        // ctx.arc(90, 65, 5, 0, Math.PI * 2, true); // Ojo derecho
        // ctx.stroke();

        // for (let i = 0; i < 4; i++) {
        //     for (let j = 0; j < 3; j++) {
        //       ctx.beginPath();
        //       const x = 25 + j * 50; // Coordenada x
        //       const y = 25 + i * 50; // Coordenada y
        //       const radius = 20; // Radio del Arco
        //       const startAngle = 0; // Punto inicial del Círculo
        //       const endAngle = Math.PI + (Math.PI * j) / 2; // Punto final del Círculo
        //       const counterclockwise = i % 2 !== 0; // En el sentido de las agujas del reloj o en sentido contrario
      
        //       ctx.arc(x, y, radius, startAngle, endAngle, counterclockwise);
      
        //       if (i > 1) {
        //         ctx.fill();
        //       } else {
        //         ctx.stroke();
        //       }
        //     }
        //   }
    }
}


canvasContainer.addEventListener('mousedown', (e)=>{
  isPressed = true
  originX = e.offsetX
  originY = e.offsetY
  console.log('mouse click')
})

canvasContainer.addEventListener('mouseup', (e)=>{
  isPressed = false
  console.log('mouse dejo de hacer click')
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
  const radius = 10; // Radio del Arco
  const startAngle = 0; // Punto inicial del Círculo
  const endAngle = Math.PI *2; // Punto final del Círculo
  const counterclockwise = 1 % 2 !== 0; // En el
  ctx.arc(arcX, arcY, radius, startAngle, endAngle, counterclockwise);
  ctx.fill()
}

function drawLine(originX,originY, arcX, arcY){
  console.log('drawing line',originX,originY,arcX, arcY)
  let ctx = canvasContainer.getContext('2d')
  ctx.beginPath()
  ctx.moveTo(originX,originY)
  ctx.lineTo(arcX, arcY)
  ctx.lineWidth = 10 *2 ;
  ctx.closePath()
  ctx.stroke()

}