Webcam.set({
    width: 320,
    height: 240,
    image_format: 'jpeg',
    jpeg_quality: 90
 });
 Webcam.attach( '#camera' );

 function capture(){
    Webcam.snap( function(data_uri) {
        // display results in page
        document.getElementById('result').innerHTML = 
         '<img id="pic1" src="'+data_uri+'"/>';
    } );
 }
//  https://teachablemachine.withgoogle.com/models/JryqXbw9H//
classifier= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/srE8wHIH5/model.json",modelLoaded)
function modelLoaded()
{
    console.log("model is loaded successfully")
 
}

function speak(){
    synth =window.speechSynthesis;
    speak_object=new SpeechSynthesisUtterance("prediction1 is " + prediction1 + " And prediction2 is "+ prediction2);
    synth.speak(speak_object)
}

function predict(){
img1=document.getElementById("pic1");
    classifier.classify(img1,gotResults)
}
function gotResults(error,results){
    if(error){
        console.log(error)
    
    }
    else{
        console.log(results)
        prediction1=results[0].label;
        prediction2=results[1].label;
        document.getElementById("emotion1").innerHTML= prediction1;
        document.getElementById("emotion2").innerHTML= prediction2;
       if(prediction1=="peace"){
        document.getElementById("emoji1").innerHTML="&#9996;";
       } 
       if(prediction2=="peace"){
        document.getElementById("emoji2").innerHTML="&#9996;";
       } 
       

       if(prediction1=="up"){

document.getElementById("emoji1").innerHTML="&#128070;";
       } 
       if(prediction2=="up"){
        document.getElementById("emoji2").innerHTML="&#128070;";
       } 
    
       
       if(prediction1=="down"){
        document.getElementById("emoji1").innerHTML="&#128071;";
       } 
       if(prediction2=="down"){
        document.getElementById("emoji2").innerHTML="&#128071;";
       } 
       speak()
    




    }

}

