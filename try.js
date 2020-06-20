function People(Name, Age, Gender)
{
	this.Name = Name,
	this.Age = Age,
	this.Gender = Gender;
	//this.getInfo = function(){return 'my name is ' + this.Name};
};
//CREATE A PROTOTYPE  //METHOD
People.prototype.getInfo  = function()
{
	return 'my name is ' + this.Name;					
}

People.prototype.getAge = function() 
{
	return this.Name + " is " + this.Age + " years old";
}
const people1 = new People("Josh", 10, "Male");
const people2 = new People("Kile", 20, "Male");

// NEW OBJECT

function Students(Name, Age, Gender, YearEnroll)
{
	People.call(this,Name,Age,Gender);
	this.Year = YearEnroll;
}
Students.prototype = Object.create(People.prototype);
Students.prototype.enRoll = function(YearEnroll)
{
	this.Year = YearEnroll;
}

const student1 = new Students("Joshkile",20,"Male","2020");
student1.enRoll = 2021;
console.log(student1);
console.log(student1.getAge());


/*	console.log(people1.getInfo());
	console.log(people1.getAge());
	console.log(people2);*/
 

 //PROTOTYPE
