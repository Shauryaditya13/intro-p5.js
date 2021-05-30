function preload() {
}

function setup() {
    canvas=createCanvas(600,400);
    canvas.position(400,300);
    video=createCapture(VIDEO)
    video.hide();
    tintcolor="";
}

function draw() {
    image(video,0,0,600,400);
    tint(tintcolor);
}

function take_snapshot() {
save("MyImage.png");
}

function filtertint() {
tintcolor=document.getElementById("color_name").value;
}