var mouse_x ;
var mouse_y ;
var canvas = document.getElementById("MyCanvas");
ctx = canvas.getContext("2d");
var colour = "red";
if (colour = "red"){
    var Check1 = "A";
    console.log(Check1);
}
//The Circle Code
ctx.beginPath();
ctx.strokeStyle = colour;
ctx.lineWidth = 20;
ctx.arc(100,100,40,0,360);
ctx.stroke();
canvas.addEventListener("mousedown",my_MouseDown);
function circle(mouse_x,mouse_y){
    colour = document.getElementById("Colour-Name").value ;
    ctx.beginPath();
    ctx.strokeStyle = colour;
    ctx.lineWidth = 20;
    ctx.arc(mouse_x,mouse_y,40,0,360);
    ctx.stroke();

}
function my_MouseDown(e){
    colour = document.getElementById("Colour-Name").value;
    mouse_x = e.clientX - canvas.offsetLeft ;
    mouse_y = e.clientY - canvas.offsetTop ;
    circle(mouse_x,mouse_y);
}
function Clearer(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
}