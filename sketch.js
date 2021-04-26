var ball;
var database;

function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";

   database = firebase.database();
   console.log("database connected")
   var ballposref = database.ref('ball/pos');
   ballposref.on("value",readposition,showerror);
    
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ball.x = ball.x + x;
    ball.y = ball.y + y;
    database.ref('ball/pos').set({
        x:ball.x,
        y:ball.y

    })
}

function readposition(data){
var position=data.val();
ball.x=position.x
ball.y=position.y
console.log(ball.x+","+ball.y)

}

function showerror(){


}

