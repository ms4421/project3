function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

function randomYPos(){
     return Math.round(getRandomArbitrary(1,3))*75;
}
function rangeCheck(p1,p2){
    if(p2>p1-50.5 && p2<p1+50.5){
        return true;
    }
}

// Enemies our player must avoid
var Enemy = function(x,y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
    this.x = x;
    this.y = y;
}

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.speed=this.x+100*dt;
    this.x = this.speed;
    if(this.x>505){
        this.x=this.speed-505;
        this.y=randomYPos();
    }
    if (this.y===player.y && rangeCheck(player.x,this.x)){
        alert('Collision!');
        player.x=202;
        player.y=375;
    }
}

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}

// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
var Player = function(x,y){
    this.sprite = 'images/char-boy.png';
    this.x = x;
    this.y = y;

}

Player.prototype.update = function() {
    this.x=this.x;
    this.y=this.y;
}

Player.prototype.render = function(){
    ctx.drawImage(Resources.get(this.sprite),this.x,this.y);
}

Player.prototype.handleInput = function(keys){
    
    console.log('x='+this.x,'y='+this.y);
    switch(keys){
        case 'left' : if(this.x>0){this.x=this.x-101;}
                        break;
        case 'right': if(this.x<404){this.x=this.x+101;}
                        break;
        case 'up': this.y=this.y-75;
                        break;
        case 'down': if(this.y<375){this.y=this.y+75;}
                        break;
            }
}

var player = new Player(202, 375);
// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
// Place the player object in a variable called player
var allEnemies = [];


allEnemies[0]= new Enemy(getRandomArbitrary(100,400),60);
allEnemies[1] = new Enemy(getRandomArbitrary(100,400),154);
allEnemies[2] = new Enemy(getRandomArbitrary(100,400), 234);




// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});