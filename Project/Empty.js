/**
 * main is the entry point for Javascript programs.
 *
 */

function main()
{
    //console.log("Menu"); 
    var game = new Game;
    initCanvas(); 
    game.initWorld();
    game.update();
    draw(); 
    this.game.draw();
}



 

/** 

 * Initialises the canvas - the drawing surface. The canvas 

 * is added to the document. When a HTML document is loaded into a 

 * browser, it becomes a document object. This document object is 

 * the root node of the HTML document and is considered the 'owner' of all other 

 * nodes such as forms, buttons, the canvas etc. 

 */ 

function initCanvas() 

{ 

// Use the document object to create a new element canvas. 

    var canvas = document.createElement("canvas"); 

// Assign the canvas an id so we can reference it elsewhere. 

canvas.id = 'mycanvas'; 

canvas.width = window.innerWidth; 

canvas.height = window.innerHeight; 

// We want this to be a 2D canvas. 

var ctx = canvas.getContext("2d"); 

// Adds the canvas element to the document. 

document.body.appendChild(canvas); 

} 

 

/** 

 * Helper function that clamps value between min and max and returns value. 

 * Example: clamp(10, 1, 3) will return 3 

 * @param {Integer} value integer value to be clamped. 

 * @param {Integer} min lower range value. 

 * @param {Integer} max upper range value. 

* @return {Integer} min if value is less than min, max if max is less than value, otherwise value. 

 */ 

function clamp(value, min, max) 

{ 

if(max<min) { 

var temp = min; 

min = max; 

max = temp; 

} 

return Math.max(min, Math.min(value, max)); 

} 

 

 

/** 

 * Helper function that returns a string of the form 'rgb(r,g,b)' where 

 * r,g and b are numeric values. 

 * @param {Number} r assumed numeric value for red. 

 * @param {Number} g assumed numeric value for green. 

 * @param {Number} b assumed numeric value for blue. 

* @return {String} a string of the form 'rgb(r,g,b)' where r,g and b are integers clamped between 0 and 255. 

 */ 

 

function rgb(r, g, b) 

{ 

return 'rgb('+clamp(Math.round(r),0,255)+', '+clamp(Math.round(g),0,255)+', '+clamp(Math.round(b),0,255)+')'; 

} 

 

/** 

 * Draws a 50x50S red filled square on the canvas 

 */ 

function draw() 

{ 
//the Menu title 
var canvas = document.getElementById('mycanvas'); 

       var ctx = canvas.getContext('2d'); 

       ctx.save();
       ctx.fillStyle = 'Yellow';
       ctx.font = 'italic 70pt Rockwell';
       ctx.textBaseLine = "bottom";
       
ctx.fillText('Sonic The Hedgehog',200,100);


ctx.beginPath();
const rectangle2 = new Path2D()
ctx.fillStyle = "Blue";
ctx.fill(rectangle2);
ctx.fillRect(600, 250, 150, 70);

ctx.beginPath();
const rectangle3 = new Path2D()
ctx.fillStyle = "Yellow";
ctx.fill(rectangle3);
ctx.fillRect(600, 350, 150, 70);

// args are x,y,width,height 

ctx.beginPath();
const rectangle = new Path2D()
ctx.fillStyle = "red";
ctx.fill(rectangle);
ctx.fillRect(600, 150, 150, 70);
// Listen for mouse moves

ctx.fillStyle = 'Yellow';
       ctx.font = 'italic 20pt Rockwell';
       ctx.textBaseLine = "bottom";
       
ctx.fillText('PlayGame',615,195);
ctx.fillStyle = 'red';
       ctx.font = 'italic 20pt Rockwell';
       ctx.textBaseLine = "bottom";
       
ctx.fillText('Settings',615,295);
ctx.fillStyle = 'BLUE';
       ctx.font = 'italic 20pt Rockwell';
       ctx.textBaseLine = "bottom";
       
ctx.fillText('Character',615,395);
//isInside(pos, rect);
//getMousePos(canvas, event);

}


//Function to get the mouse position
function getMousePos(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    };
}
//Function to check whether a point is inside a rectangle
function isInside(pos, rect){
    return pos.x > rect.x && pos.x < rect.x+rect.width && pos.y < rect.y+rect.height && pos.y > rect.y
}


//The rectangle should have x,y,width,height properties
var rect = {
    x:250,
    y:350,
    width:200,
    height:100
};
//Binding the click event on the canvas
// canvas.addEventListener('click', function(evt) {
//     var mousePos = getMousePos(canvas, evt);

//     if (isInside(mousePos,rect)) {
//         alert('clicked inside rect');
//     }else{
//         alert('clicked outside rect');
//     }   
// }, false);


