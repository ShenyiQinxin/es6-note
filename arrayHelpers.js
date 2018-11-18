/* forEach */
function forEachFunction() {
	var colors = ['red', 'blue', 'green'];

	
	var sum ='';
	colors.forEach(function(color) {
		sum +=color;
	});

	var images = [
		{ height: 10, width: 30 },
		{ height: 20, width: 90 },
		{ height: 54, width: 32 }
	];
	var areas = [];
	images.forEach(function(image){
		areas.push(image.height*image.width);
	});

};

/* map */
function mapFunction() {
	var numbers = [1, 2, 3];
	var doubled = numbers.map(function(number) {
		return number*2;
	});

	var cars = [
		{model: 'Buick', price: 'CHEAP'},
		{model: 'Camaro', price: 'expensive'}
	];
	var prices = cars.map(function(car){
		return car.price;
	});

	function pluck(array, property) {
	    return array.map(function(prop){
	       return prop[property]; 
	    });
	};
};


/* filter */
function filterFunction(){
	var products = [{name: 'cucumber', type: 'vege'}, 
	{name: 'banana', type: 'fruit'}];

	products.filter(function(product) {
		return product.type == 'vege';
	});


	var numbers = [15, 25, 35, 45, 55, 65, 75, 85, 95];
	var filteredNumbers = filterNumbers(numbers);
	function filterNumbers(numbers) {
    	return numbers.filter(function(number) {
       		return number>50; 
    });

    var users = [
	 { id: 1, admin: true },  
	 { id: 2, admin: false },
	 { id: 3, admin: false },
	 { id: 4, admin: false },
	 { id: 5, admin: true },
	];

	var filteredUsers = filterUsers(users);

	function filterUsers(users) {
	    return users.filter(function(user) {
	        return user.admin === true;
	    });
	}

	function reject(array, iteratorFunction) {
	  return array.filter(function(number) {
	      return !iteratorFunction(number);
	  });
	}
	var LessThan15 = reject(numbers, function(number) {
		return number>15;
	});

}

/* find */
function findFunction() {
	var users = [
	  { id: 1, admin: false },
	  { id: 2, admin: false },
	  { id: 3, admin: true }
	];

	var admin = users.find(function(user){
	    return user.admin === true;
	});

	function findWhere(array, criteria) {
	  return array.find(function(item) {
	      return item.height === criteria.height;
	  });
	}
}


/* every & some */
function everySomeFunction() {
	var computers = [
		{name: 'Apple', ram: 24},
		{name: 'compaq', ram: 4}
	];
	computers.every(function(computer) {
		return computer.ram >16;
	});

	computers.some(function(computer) {
		return computer.ram >16;
	});

	function Field(value) {
		this.value = value;
	}

	Field.prototype.validate = function() {
		return this.value.length > 0;
	}

	var username = new Field("2cool");
	var password = new Field("my_pass");
	var fields = [username, password];
	var formIsValid = fields.every(function(field) {
		return field.validate();
	});

}


/* reduce */
function reduceFunction() {
	var numbers = [1, 2, 3];
	numbers.reduce(function(sum, number){
		return sum + number;
	}, 0);

	var colors = ['red', 'blue', 'green'];
	primaryColors.reduce(function(previous, primaryColor) {
		prvious.push(primaryColor.color);
		return previous;
	}, []);

	function balancedParens(string) {
		return !string.split("").reduce(function(previous, char){
			if(previous <0)  {return previous;}
			if(char === "(") {return ++previous;}
			if(char === ")") {return --previous;}
			return previous;
		}, 0);
	}

	var desks = [
	  { type: 'sitting' },
	  { type: 'standing' },
	  { type: 'sitting' },
	  { type: 'sitting' },
	  { type: 'standing' }
	];

	var deskTypes = desks.reduce(function(acc, desk) {
	    if(desk.type === 'sitting') {acc.sitting+=1;}
	    if(desk.type === 'standing') {++acc.standing;}
	    return acc;
	}, { sitting: 0, standing: 0 });


	function unique(array) {
    return array.reduce((arr, e) => {
	        if(!arr.find(inArr => inArr === e)) {arr.push(e);}
	        return arr;
	    }, []);
	}
}