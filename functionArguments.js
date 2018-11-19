function makeRequest(url, method = 'GET') {
	return method;
}

makeRequest('google.com');
makeRequest('google.com', 'POST');

function createAdminUser(user = new User(generateId())){
	user.admin = true;
	return user;
}

const user = new User(generateId());
createAdminUser(user);

const addOffset = (style={}) => {
  style.offset = '10px';
  
  return style;
}

/* spread array */
function addNumbers(...numbers) {
	return numbers.reduce((sum, number)=> sum+number, 0);
}

const defaultColors = ['red', 'green'];
const userFavoriteColors = ['orange', 'yellow'];
['blue', ...defaultColors, ...userFavoriteColors];

function valideShoppingList(...items) {
	if(items.indexOf('milk')<0){
		return ['milk', ...items];
	}
}

valideShoppingList('orange','bread','eggs');

const MathLibrary = {
	calculateProduct(...rest) {
		console.log('Please use the multiply method instead');
		return this.multiply(...rest);
	},
	multiply(a, b) {
		return a*b;
	}
}

function product(...numbers) {
  return numbers.reduce(function(acc, number) {
    return acc * number;
  }, 1)
}

//var type= expense.type;
//var amount = expense.amount;
const {type, amount} = expense;

var savedFile = {
	extension: 'jpg',
	name: 'repost',
	size: 14010
};
function fileSummary({name, extension, size}, {color}) {
	return `${color} The file ${name}.${extension} is of size ${size}`;
}

fileSummary(savedFile, {color: 'red'});

const companies = ['Google', 'Facebook', 'Uber'];
const [name] = companies; //companies[0] Google
const {length} = companies; //3
const [name, name2, ...rest] = companies;

const companies = [
	{name: 'Google', location: 'Mountain View'},
	{name: 'Facebook', location: 'Menlo Park'}
]
const[location] = companies;//{name: 'Google', location: 'Mountain View'}
const[{location}] = companies;//'Mountain View'

function signup({email, password, dateOfBirth, city, username}){

}

const user = {
	username: 'myname',
	//...
}

signup(user);


const points = [
	[4,5],
	[10, 1],
	[0, 40]
];
points.map(([x, y]) => {
	return {x, y};
});

const profile = {
  title: 'Engineer',
  department: 'Engineering'
};

function isEngineer({title, department}) {
  return title === 'Engineer' && department === 'Engineering';
}