function carModels (name, rentPrice, status, total) {
	this.name = name;
    this.rentPrice = rentPrice;
    this.status = status;
    this.total = total;	
	this.displayCar = displayCar;
}

car_sedan = new carModels("Sedan", 50, "Available", 10);
car_suv = new carModels("SUV", 100, "Available", 8);  
car_sports = new carModels("Sports", 120, "Available", 5);


function displayCar(){
console.log("Car Name: " + car_sedan.name +  "Rent Price: " + car_sedan.rentPrice  + "Car status: " + car_sedan.status + car_sedan.total);
console.log("Car Name: " + car_suv.name + "Rent Price: " + car_suv.rentPrice  + "Car status: " + car_suv.status + car_suv.total );
console.log("Car Name: " + car_sports.name  + "Rent Price: " + car_sports.rentPrice  + "Car status: " + car_sports.status + car_sports.total );
}

function rent_Request() {
	if(car_sedan.total === 0) {
	  console.log("Sedan is not available!");			
	} else if(car_suv.total === 0) {
	  console.log("Suv is not available!");				
	} else if(car_sports.total === 0) {
	  console.log("Sports is not available!");
	} else {
	  console.log("Available");	
	}
}


