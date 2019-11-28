function bark(name, weight) {
    if (weight > 20) {
        console.log(name + " says WOOF WOOF");
    } else {
        console.log(name + " says woof woof");
    }
}

bark("rover", 23);
bark("spike", 19);
bark("max", 45);     

function bake(degrees) {
    var message;

    if (degrees > 500) {
        message = "I'm not a nuclear reactor!";
    } else if (degrees < 100)  {
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable tempature for me.";
        setMode("bake");
        setTemp(degrees);
    }
    return message;
}

var status = bake(350);