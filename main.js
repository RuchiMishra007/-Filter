nosex = 0;
nosey = 0;
function preload() {
  moustache = loadImage('https://image.shutterstock.com/image-vector/transparent-mustache-icon-png-vector-260nw-1952976943.jpg');
  }

  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(300,300);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
  }
 function draw() {
   image(video,0,0,300,300);
   
   image(moustache , nosex, nosey, 30, 30);
 }
 function take_snapshot(){    
    save('myFilterImage.png');
  }
   function modelLoaded() {
     console.log('PoseNet Is Initialized');
   }
   

   function gotPoses(results)
   {
     if(results.length > 0)
     {
     console.log(results);
     nosex = results[0].pose.nose.x;
     nosey = results[0].pose.nose.y;
     console.log("nose x = " + nosex);
     console.log("nose y = " + nosey);
     }
     
   }