function setup() {
  canvas = createCanvas(500, 500);
  canvas.center();
  video = createCapture(VIDEO);
  video.hide();
  classifier = ml5.imageClassifier("mobileNet" , modelLoaded);
}

function draw(){
  image(video , 0 , 0 , 500 , 500);
  classifier.classify(video , gotResults);
}

function modelLoaded()
{
  console.log("model is loaded !!!");
}

function gotResults(error , results){
  if(error){
    console.error(error);
  }else{
    console.log(results);

    document.getElementById("object_name").innerHTML = results[0].label;
    document.getElementById("object_accuracy").innerHTML = results[0].confidence.toFixed(2);
  }
}


