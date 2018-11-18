member/* template string */
function getMessage() {
	const year = new Date().getFullYear();
	return `The year is ${year}`;
}

function fullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}

const two = () => 2;
const double = number => 2 * number;
const add = (a, b) => a+b;

const add = function(a, b) { return a+b;};

const add = (a, b) => { 
	return a+b;
};

numbers.map(number => 2* number);

const team = {
	member: ['Jane', 'Bill'],
	teamName: 'Super Squad',
	teamSummary: function() {
		return this.member.map((member) => {
			return `${member} is on team ${this.teamName}`;
		});
	}
};

const profile = {
    name: 'Alex',
    getName: function(name) { return this.name;}
};
