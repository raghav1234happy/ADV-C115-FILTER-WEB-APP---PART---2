function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modalLoaded);
    poseNet.on('pose', gotPoses);
}

function draw() {
    image(video, 0, 0, 300, 300);
}

function modelLoaded() {
    console.log("Model has loaded");
}

function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        mustachex = results[0].pose.mustache.x;
        mustachey = results[0].pose.mustache.y;
    }
}

