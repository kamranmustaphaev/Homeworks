const cvs = document.querySelector('#cvs')
const ctx = cvs.getContext('2d')

cvs.width = window.innerWidth;
cvs.height = window.innerHeight;

function coordi(x, y){
ctx.beginPath()
ctx.lineTo( cvs.width/2 + x, cvs.height/2 )
ctx.lineTo(cvs.width/2 - y,cvs.height/2)
ctx.stroke()
}
coordi(+50, 50)