class Game {

    constructor() {
this.boundRecursiveUpdate = () => this.update(this);
var canvas = document.createElement("canvas");
canvas.id = 'mycanvas';
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");
document.body.appendChild(canvas);  

    

    }

    update() {

        window.requestAnimationFrame(this.boundRecursiveUpdate);
        this.draw();
    }
    initWorld() //prints out "Initialising"
    {
        this.player = new Player(Math.floor(Math.random() * Math.floor(window.innerWidth - 100)),
        Math.floor(Math.random() * Math.floor(window.innerHeight - 100)),
        100,
        100,
        new colourer(0,0,0));
        document.addEventListener("keydown",() => this.keyDownHandler(this.player,event)); 

    }
    draw()
    {
      this.player.draw();
     
     
   
    }
    keyDownHandler(player, e)
    {
    
        /**
     * handles the key inputs
     *
     */
        if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
    
            e.preventDefault();
    
    
            if (e.keyCode === 40) {
                player.move(player.x, player.y + 5);
            }
            if (e.keyCode === 39) {
                player.move(player.x + 5, player.y);
            }
            if (e.keyCode === 37) {
                player.move(player.x - 5, player.y);
            }
            if (e.keyCode === 38) {
                player.move(player.x, player.y - 5);
            }
        }
        this.draw();
    }

} 