function start_classification()
{
    navigator.mediaDevices.getUserMedia({
audio:true,
    });
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/wFDOOzmA4/model.json",modelReady);

}function modelReady()
{

    classifier.classify(gotResults);
}
var dog=0;
var cat=0;
function gotResults(error,results){
    if(error)
    {
    console.log("error");
    
    }
    else{
    console.log(results);
    random_r=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;


    document.getElementById("result_label").innerHTML="DETECTED VOICE IS OF-"+results[0].label;
    document.getElementById("result_count").innerHTML="DETECTED DOG-"+dog+"DETECTED CAT-"+cat;
    document.getElementById("result_label").style.color="rgb("+random_r+","+random_b+","+random_g+")";
    document.getElementById("result_label").style.color="rgb("+random_r+","+random_b+","+random_g+")";
    img=document.getElementById("dog_gif");
    if (results[0].label == "Barking") {
     img.src = 'bark.gif'; dog = dog+1;
     }
     else if (results[0].label == "Meowing") { 
         img.src = 'meow.gif'; cat = cat + 1; 
        } 
    else{ img.src = 'listen.gif'; } } }
