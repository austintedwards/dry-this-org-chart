function Employee(name, email, position, project, gender){
    this.name = name;
    this.email = email;
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

  let elon = new Employee("Elon Musk","elon.musk@musky.com","Boss");

  let hire = [new Employee("Alan Turing","alan.turing@musky.com","Computer Scientist","Cryptography","M"),
  new Employee("Grace Hopper","grace.hopper@musky.com","Computer Scientist","Compilers","F"),
  new Employee("Donald Knuth","donald.knuth@musky.com","Mathematician","Algorithm Analysis","M")];




function hired(employee, manager, trade){
  employee.mrManager(manager)
  employee.trade(trade)
  employee.introduce()
}


let [alan,grace,donald] = hire;
hired(alan,elon,"Mathematics");
hired(grace,elon,"Cobol");
hired(donald,elon,"Computational Complexity");



// whoops!  new person hired later on, do the same again for him


  let tim = new Employee ("Tim Berners-Lee","tim.berners_lee@musky.com","Computer Science","Networks");
  hired(tim, elon, "Protocols");
