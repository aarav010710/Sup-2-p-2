var canvas = new fabric.Canvas('myCanvas');

var super_y = 10;
var super_x = 10;

block_image_width = 30;
block_image_height = 30;

var super_object = "";
var block_object = "";

function player_update()
{
    fabric.Image.fromURL("avenger_bg.jpg",function(Img)
    {
        super_object = Img;
        super_object.scaleToWidth(150);
        super_object.scaleToHeight(140)
        super_object.set({
            top:super_y,
            left:super_x,
        });
canvas.add(super_object);
    });
}

function new_image(get_image)
{
    fabric.Image.fromURL(get_image,function(Img)
    {
        super_object = Img;
        super_object.scaleToWidth(block_image_width);
        super_object.scaleToHeight(block_image_height);
        super_object.set({
            top:super_y,
            left:super_x,
        });
canvas.add(super_object);
    });
}

window.addEventListener("keydown",my_keydown);

function my_keydown(e)
{
    if(e.shiftKey == true && keyPressed == '80' )
    {
console.log("Shift and p pressed");

block_image_width = block_image_width + 10;
block_image_height = block_image_height + 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }


    if(e.shiftKey == true && keyPressed == '80' )
    {
console.log("Shift and m pressed");

block_image_width = block_image_width - 10;
block_image_height = block_image_height - 10;
document.getElementById("current_width").innerHTML = block_image_width;
document.getElementById("current_height").innerHTML = block_image_height;
    }
}


if (keyPressed == '70')
    {
     new_image('ironman_face.png');
     console.log("f");
    }

if (keyPressed == '66')
{
 new_image('spiderman_body.png');
 console.log("b");
}
if (keyPressed == '76')
    {
     new_image('hulk_legs.png');
     console.log("l");
    }
    if (keyPressed == '82')
    {
     new_image('thor_right_hand.png');
     console.log("r");
    }
    if (keyPressed == '72')
    {
     new_image('captain_america_left_hand.png');
     console.log("h");
    }

    if (keyPressed == '37')
    {
     left();
     console.log("left");
    }

    if (keyPressed == '38')
    {
     up();
     console.log("up");
    }
    if (keyPressed == '39')
    {
     right();
     console.log("right");
    }
    if (keyPressed == '40')
    {
     down();
     console.log("down");
    }