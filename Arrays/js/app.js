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

//Putting it all together


var scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69,
    34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 
    46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44,];
    
var output; 

function printAndGetHighScores(scores) {
    var highScore = 0;
    var output;
    for (var i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);
        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highscore) {
    var bestSolutions = [];
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push[i];
        }
    }
    return bestSolutions;
}

var highScore = printAndGetHighScores(scores);
console.log("BUbbles tests: " + scores.length );
console.log("Highest bubble score: " + highScore);

var bestSolutions = getBestResults(scores, highScore);
console.log("Solutions with highest score: " + bestSolutions);

//Excercise
var costs = [.25, .27, .25, .25, .25, .25, 
             .33, .31, .25, .29, .27, .22,
             .31, .25, .25, .33, .21, .25,
             .25, .25, .30, .25, .24, .25,
             .25, .25, .27, .25, .26, .29]

 function GetMostCostEffectiveSolution(scores, costs, highScore) {
    var cost = 100;
    var index;
    for(var i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
var mostCostEffective = GetMostCostEffectiveSolution(scores, costs, highScore);
console.log("bubble Solution #" + mostCostEffective + " is the most cost effective");