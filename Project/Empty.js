/**
 * main is the entry point for Javascript programs.
 *
 */

function main()
{
    console.log("Menu"); 
    initCanvas(); 
    draw(); 


}


  // Create circle

//ctx.fillStyle = 'red';
//ctx.fill(circle);


 

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




// args are x,y,width,height 

ctx.beginPath();
const rectangle = new Path2D()
ctx.fillStyle = "blue";
ctx.fill(rectangle);

// Listen for mouse moves
canvas.addEventListener('mousemove', function(event) {
    // Check whether point is inside circle
    mouse = oMousePos(canvas, event);
    if (ctx.isPointInPath( mouse.x,mouse.y)) {
       
      ctx.fillStyle = 'green';
      
    }
    else {
      ctx.fillStyle = 'red';
    }
  
    
    ctx.fillRect(600, 150, 150, 70);
});
ctx.fillStyle = 'Yellow';
       ctx.font = 'italic 20pt Rockwell';
       ctx.textBaseLine = "bottom";
       
ctx.fillText('PlayGame',600,200);


function oMousePos(canvas, evt) {
    var ClientRect = canvas.getBoundingClientRect();
      return { //objeto
      x: Math.round(evt.clientX - ClientRect.left),
      y: Math.round(evt.clientY - ClientRect.top)
  }
  }
} 