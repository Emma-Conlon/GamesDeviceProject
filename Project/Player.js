function clamp(value, min, max) {
    if (max < min) {
        var temp = min;
        min = max;
        max = temp;
    }
    return Math.max(min, Math.min(value, max));
}

/**
 * makes a change of color
 *
 */
class colourer {

    constructor(r, g, b) {
        this.r = r;
        this.b = b;
        this.g = g;
    }
    rgb() {

        return 'rgb(' + clamp(Math.round(this.r), 0, 255) + ', ' + clamp(Math.round(this.g), 0, 255) + ', ' + clamp(Math.round(this.b), 0, 255) + ')';

    }

}

class Player {
    constructor(x, y, width, height, colour) {
        this.width = width;
        this.height = height;
        this.x = x;
        this.y = y;
        this.colour = colour;
    }
/**
 * Renders the square.
 *
 */
    draw() {

        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = this.colour.rgb();
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    /**
 * move clears the rect.
 *
 */
    move(xa, ya) {
        var canvas = document.getElementById('mycanvas');
        var ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        this.x = xa;
        this.y = ya;

    }

    checkCollision(e)
    {
        var collides = false;


        if((this.x < e.x +  e.width) &&
            (this.x + this.width > e.x) &&
            (this.y+ this.height > e.y)&&
            (this.y < e.y + e.height) )
            {
                collides = true;
            }
    return collides;
        }
    
}