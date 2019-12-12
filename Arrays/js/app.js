 //Arrays

 function makePhrases() {
     var words1 = ["24/7", "multi-tier", "30,000 foot", "B-to-B", "win-win"];
     var words2 = ["empowered", "value-added", "oriented", "focused", "aligned"];
     var words3 = ["process", "solution", "tipping-point", "strategy", "vision"];

     var rand1 = Math.floor(Math.random() * words1.length);
     var rand2 = Math.floor(Math.random() * words2.length);
     var rand3 = Math.floor(Math.random() * words3.length);
     
     var phrase = words1[rand1] + " " + words2[rand2] + " " + words3[rand3];
     alert(phrase);
 }
 makePhrases();

 // How to iterate over an array

 var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
               34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 
               46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,];
               
var output; 

//While loop used to iterate through array
var i = 0;
while(i < scores.length) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
    i = i +1;
}

//For loop used to iterate through array
for (var i = 0; i < scores.length; i++) {
    output = "Bubble solution #" + i + " score: " + scores[i];
    console.log(output);
}

//adding if statement
var highScore = 0;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if(scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    console.log("BUbbles tests: " + scores.length );
    console.log("Highest bubble score: " + highScore);