function Employee(name, position, project, gender){
    this.name = name;
    this.email = Employee.email(name);
    this.position = position;
    this.project = project;
    this.gender = gender;
    this.skills =[];
}

Employee.prototype.mrManager = function(manager){
  this.manager = manager;
};

// send to training

Employee.prototype.trade = function(skill){
    this.skills.push(skill);
};


Employee.prototype.introduce = function(){
    console.log(` ${this.name} is a ${this.position} working on ${this.project}.`);
    console.log(` ${this.gender === 'F'? 'She':'He'} can be reached at ${this.email}.`);
    console.log(`${this.gender === 'F'? 'Her':'His'} boss is ${this.manager.name} and skills include ${this.skills}. `);
  }

  Employee.email=function(name){
    return name.replace(" ",".").toLowerCase() +"@musky.com"
  }

  let elon = new Employee("Elon Musk","Boss");

  let hire = [new Employee("Alan Turing","Computer Scientist","Cryptography","M"),
  new Employee("Grace Hopper","Computer Scientist","Compilers","F"),
  new Employee("Donald Knuth","Mathematician","Algorithm Analysis","M")];

  let [alan,grace,donald] = hire;



hired(alan,elon,"Mathematics");
hired(grace,elon,"Cobol");
hired(donald,elon,"Computational Complexity");



function hired(employee, manager, trade){
  employee.mrManager(manager)
  employee.trade(trade)
  employee.introduce()
}





// whoops!  new person hired later on, do the same again for him


  let tim = new Employee ("Tim Berners-Lee","Computer Science","Networks");
  hired(tim, elon, "Protocols");
