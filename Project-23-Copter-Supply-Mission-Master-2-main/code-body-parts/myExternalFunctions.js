// Display Objects and Images
function displayImagesAndObjects() {
    // ellipseMode(CENTER);
    rectMode(CENTER);
    imageMode(CENTER);
    ellipseMode(RADIUS);

    trolleyLeft.display("red");
    trolleyRight.display("red");
    trolleyDown.display("red");
    
    image(groundImage, groundImageX, groundImageY);
    image(copterImage, copterImageX, copterImageY);
    // image(packImage, packImageX, packImageY);
    
    rect(copter.position.x, copter.position.y, 100, 70);
    if(packReleased) {
        Matter.Body.setStatic(pack, false);
        ellipse(pack.position.x, pack.position.y, 30);
    }

    text("MouseX :" + mouseX, 500, 250);
    text("MouseY :" + mouseY, 500, 350);
}

// Set the Object and Image properties
function setProperties() {
    setObjectMovementProperties();
    setImageProperties();
}

// Move objects and set the velocities
function setObjectMovementProperties() {
   
    copter.position.y = 150;
    Matter.Body.setVelocity(copter, copter_speed);    
    pack.position.x = copter.position.x; 
    if (!isOffScreen(copter, 100, 70) && keyDown(DOWN_ARROW) && !packReleased) {
        //packShouldStayAt150Y = false;
        //Matter.Body.setVelocity(pack, {x: 0,y: 0});
        //Matter.Body.setStatic(pack, false);        
        // pack.position.x = copter.position.x;
        //pack = Bodies.circle(copter.position.x, 150, 30, pack_options);
        packReleased = true;
               
        ellipse(pack.position.x, pack.position.y, 30);
        Matter.Body.setStatic(pack, false);
        console.log("Key has been pressed");
        console.log(pack.position.x)
    }
}

// Declare image positions
function setImageProperties() {
    groundImageX = ground.position.x;
    groundImageY = ground.position.y;

    copterImageX = copter.position.x;
    copterImageY = copter.position.y;

    //packImageX = pack.position.x;
    //packImageY = pack.position.y;
    
    packImage.width = 80;
    packImage.height = 80;
    groundImage.height = 200;
    groundImage.width = 1600;
    packImage.scale = 0.6;
    copterImage.scale = 2;
}

function isOffScreen(object, objectRequiredWidth, objectRequiredHeight) {
    return (
        object.position.x > width + (objectRequiredWidth / 2)

        || object.position.x < 0 - (objectRequiredWidth / 2)

        || object.position.y > height + (objectRequiredHeight / 2)

        || object.position.y < 0 - (objectRequiredHeight / 2));
}