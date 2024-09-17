
const mycanvas2 = document.getElementById('myCanvas2');
const ctx2 = mycanvas2.getContext('2d');

ctx2.fillStyle = 'rgb(18, 13, 118)';
ctx2.fillRect(0, 0, mycanvas2.width, mycanvas2.height);

ctx2.fillStyle = "white";
ctx2.font = "19px Arial";

ctx2.fillText("Objetivo: Quita toda la piedra  " , 10, 30); 
ctx2.fillText("antes de que se acabe el tiempo " , 10, 60); 

ctx2.fillText("Arriba: W " , 10, 200); 
ctx2.fillText("Abajo: S " , 10, 230); 
ctx2.fillText("Izquierda: A " , 10, 260); 
ctx2.fillText("Derecha: D" , 10, 290); 
ctx2.fillText("Poner bomba: ESPACIO" , 10, 320); 
ctx2.fillText("Reiniciar: F5" , 10, 350); 
ctx2.fillText("NO HAY PAUSA XDD" , 10, 380); 
