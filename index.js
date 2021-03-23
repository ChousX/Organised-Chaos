var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var m_x;
var m_y;

window.addEventListener('mousemove', function(event){
    m_x = event.x;
    m_y = event.y;
    // circle(m_x, m_y, 10);
    console.log(m_x, m_y);
});

function circle(x, y, r, color) {
c.beginPath()
c.fillStyle = color? color : "black"
c.arc(x, y, r, 0, Math.PI * 2, false)
c.fill()
}
