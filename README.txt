frontend-nanodegree-arcade-game
Students should use this rubric: https://www.udacity.com/course/viewer#!/c-ud015/l-3072058665/m-3072588797

for self-checking their submission.

This game had lots of numbers involved and used the 101 rule for each block's x location so placed it in 202 where is the middle block in x locations. for players y initial location chose 375 and in every win and colision also used the same location. I used one methode that I found online for the random number here is the website for it: //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/random For y locations used the random number generator to randomly set it to 75 or 150 or 225 and that is how the enemy will appear.

the collision was the hardest part and just tried my best to determine when it happens. Since I set y locations by adding/subtracting same numbers, it would hit playery=enemyY and for x used a diff value based on 101 rule of each block. Instruction on how to play the game:

there is one player and many enemy bugs.
the player can move one step up down left and right using the arrows on keyboard.
if the player and enemy gets to same block, there is a collision and the collision count will go up and the player's postion will be set to initail position.
if the player is on the top brick without any collisions, then he/sh scores 1 point and the player's positions changes to the initail starting position
there are 2 possible results from each game collision or win and the coutn will increase for each as the game gose on.
if you want to start the game from score/collision 0 then you have to refresh the page.
