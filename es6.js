class People
{
	constructor(Name,Age,Gender)
	{
		this.Name=Name;
		this.Age=Age;
		this.Gender=Gender;
	}
	getinfo()
	{
		return this.Name + " is " + this.Age + " yrs.old" ;
	}
}


const people = new People("josh", 10,"Male");
console.log(people.getinfo());


const users = [
  { name: 'John', age: 34 },
  { name: 'Amy', age: 20 },
  { name: 'camperCat', age: 10 }
];

const names = users.map(user.name);
console.log(names); // [ 'John', 'Amy', 'camperCat' ]

