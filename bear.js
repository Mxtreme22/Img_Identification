img = "";
status = "";



function setup() {
    canvas = createCanvas(640, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";

}

function preload(){
img = loadImage('image5.jpeg');
}

function modelLoaded() {
    console.log("Model Loaded!");
    status = true;
    objectDetector.detect(img, gotResult);
}

function gotResult(error, results) {
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;

    }

function draw() {
    image(img, 0, 0, 640, 420);
    fill("#FF0000");
    text("Bear", 45, 75);
    noFill();
    stroke("#FF0000");
    rect(30, 60, 450, 350);
   
}

