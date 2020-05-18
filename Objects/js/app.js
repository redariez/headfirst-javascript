//Objects
 var taxi = {
     make: "Webville Motors",
     model: "Taxi",
     year: 1955,
     color: "yellow",
     passengers: 4,
     convertible: false,
     mileage: 281341,

 };

 function prequal(car) {
     if (car.mileage > 1000) {
         return false;
     } else if (car.year > 1960) {
         return false;
     }
     return true;
 }

 var worthALook = prequal(taxi);

 if(worthALook) {
     console.log("You gotta Check out this " + taxi.make + " " + taxi.model);
 } else {
     console.log("You should really pass on the " + taxi.make + " " + taxi.model);
 }

 //Making a car
 function makeCar() {
     var makes = ["Chevy", "GM", "Fiat", "webville Motors", "Tucker"];
     var models = ["Cadillac", "500", "Bel-Air", "Taxi", "Torpedo"];
     var years = [1955, 1957, 1948, 1954, 1961];
     var colors = ["red", "blue", "tan", "yellow", "white"];
     var convertible = [true, false];

     
     var rand1 = Math.floor(Math.random() * makes.length);
     var rand2 = Math.floor(Math.random() * models.length);
     var rand3 = Math.floor(Math.random() * years.length);
     var rand4 = Math.floor(Math.random() * colors.length);
     var rand5 = Math.floor(Math.random() * 5) + 1;
     var rand6 = Math.floor(Math.random() * 2);

     var car = {
         make: makes[rand1],
         model: models[rand2],
         year: years[rand3],
         color: colors[rand4],
         passengers: rand5,
         convertible: convertible[rand6],
         mileage: 0
     };
        return car;
    }
    function displayCar(car) {
        console.log("Your new car is a " + car.year + " " + car.make + " " + car.model)
    }

    var carToSell = makeCar();
    displayCar(carToSell);


    //Adding behavior to our object
    var fiat = {
        makes: "Fiat", 
        models: "500",
        years: 1957,
        colors:  "Medium Blue",
        passengers: 2,
        convertible: false,
        mileage: 88000,
        started: false,


        start: function() {
            this.started = true;
        },

        stop: function() {
            this.started = false;
        },

        drive: function() { 
            if (this.started) {
                alert("zoom zoom!");
            } else {
                alert("You need to start the engine first.");
            }
        }
    };

    fiat.drive();
    fiat.start();
    fiat.drive();
    fiat.stop();

    fiat.started = true;

    //Find the mistake  
    var song = {
        name: "Walk This Way",
        artist: "Run-D.M.C",
        minutes: 4,
        seconds: 3,
        genre: "80s",
        playing: false,

        play: function() {
            if (!this.playing) {
                this.playing = true;
                console.log("Playing " + this.name + " by " + this.artist);
            }
        },
        pause: function() {
            if (this.playing) {
                this.playing = false;
            }
        }
    };

    song.play();
    song.pause();
    

    //adding drive method to car object
    var cadi = {
        make: "GM",
        model: "Cadillac",
        year: 1955,
        color: "tan",
        passengers: 5,
        convertible: false,
        mileage: 12892,

        start: function() {
            this.started = true;
        },

        stop: function() {
            this.started = false;
        },

        drive: function() { 
            if (this.started) {
                alert(this.color + " " + this.make + " " + this.model + " goes zoom zoom");
            } else {
                alert("You need to start the engine first pimp.");
            }
        }
    };

    cadi.drive();
    cadi.start();
    cadi.drive();
    cadi.stop();

    //Adding state to the behavior

    var fiat = {
        make: "Fiat", 
        model: "500",
        years: 1957,
        colors:  "Medium Blue",
        passengers: 2,
        convertible: false,
        mileage: 88000,
        started: false,
        fuel: 0,


        start: function() {
            this.started = true;
        },

        stop: function() {
            this.started = false;
        },

        drive: function() { 
            if (this.started) {
                if (this.fuel > 0) {
                alert(this.make + " " + this.model + " goes zoom zoom!");
                this.fuel = this.fuel -1;
            } else {
                alert("Out of fuel.");
                this.stop();
            }
        } else {
            alert("You need to start the engine first");
             }
        },
        addFuel: function(amount) {
            this.fuel = this.fuel + amount;
        }
    };

    fiat.start();
    fiat.drive();
    fiat.addFuel(2);
    fiat.start();
    fiat.drive();
    fiat.drive();
    fiat.drive();
    fiat.stop();

    fiat.started = true;