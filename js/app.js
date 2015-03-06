var count = 0;
// Enemies our player must avoid
var Enemy = function (x, y) {
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    this.x = x;
    this.y = y;

    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
    this.sprite = 'images/enemy-bug.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    this.speed = this.x + this.x*dt;
    this.x = this.speed;
    //check if the enemy reached the end of canvas
    if (this.x > 505) {
        //pick a random y from the range
        this.y = randomYval();
        //place it back at begining x position
        this.x = this.speed - 505;

        }
    //if there is a collision reset the player to initial place
    if(isCollision(player.x, player.y, this.x, this.y)) {
        alert ("collision");
        player.x = 202;
        player.y = 375;
        }    
};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
}
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.

var Player = function (x, y) {
    this.x = x;
    this.y = y;
    this.sprite = 'images/char-boy.png';
};

// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Player.prototype.update = function (dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
    //not sure what this does 
    this.x = this.x;
    this.y = this.y;
};

// Draw the player on the screen, required method for game
Player.prototype.render = function () {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};

Player.prototype.handleInput = function (key) {
    
    // document.getElementsById('score').innerHTML = 0;
    if(key == 'left'){
        if(this.x > 0) {
            //to move to left subtrack one block(101) from its value of x
            this.x = this.x - 101;
        }
    }else if(key == 'right'){
    //check if the x is less than the val of last block (start at 404 to 505)
        if(this.x < 404){
            this.x = this.x +101;
        }
    }else if(key == 'up'){
        if(this.y <75){
            count++;
            //dynamically set the score to new count value
           document.getElementById('score').innerHTML = count;
            //reset x and y to initial position
            this.x = 202;
            this.y = 375;

        }else{        
            this.y = this.y - 75;
        }
    }else if(key == 'down'){
        if(this.y<375) {
            this.y = this.y + 75;
        }
    }
};

// Now instantiate your objects.

var x1 = getRandomArbitrary(0,500);
var x2 = getRandomArbitrary(0,500);
var x3 = getRandomArbitrary(0,500);
var enemy1 = new Enemy(x1,70);
var enemy2 = new Enemy(x2,154);
var enemy3 = new Enemy(x3,234);

// Place all enemy objects in an array called allEnemies
var allEnemies = [enemy1, enemy2, enemy3];
// Place the player object in a variable called player
var player =new  Player(202, 375);

// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e){
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});


//helper function found on internet to help generate random numbers
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random
// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

//helpre function to pick random Y axis values
function randomYval(){
    var yVal = Math.round(getRandomArbitrary(1,3));
    //console.log ("yVal = " + yVal);
    return yVal * 75;
}

//check if player and enemy  x position is in same box/block
// x1 is players and x2 is enemy's in this case
function isCollision(px, py, ex, ey){
   // console.log("px="+px +" py="+py +" ex="+ex+" ey="+ ey);
    if(py === ey && checkXLocations(px,ex) ){
        return true;
    }

}


function checkXLocations(playerX, enemyX){
    //based on 101 we will have 50.5 50.5
        xPosFirstHalf = playerX - 50.5;
        xPosSecondHalf = playerX + 50.5;
        if(enemyX > xPosFirstHalf && enemyX < xPosSecondHalf){
        return true;
        }
    }
