function Employee(name, email, position, project,gender){
    this.name = name;
    this.email = email;
    this.position = position;
    this.project = project;
    this.gender = gender;
    this.skills =[];
}

Employee.prototype.manager = function(manager){
  this.manager = manager;
};

let elon = new Employee("Elon Musk","elon.musk@musky.com","Boss")

let hire = [new Employee("Alan Turing","alan.turing@musky.com","Computer Scientist","Cryptography","M"),
new Employee("Grace Hopper","grace.hopper@musky.com","Computer Scientist","Compilers","F"),
new Employee("Donald Knuth","donald.knuth@musky.com","Mathematician","Algorithm Analysis","M")]

let [alan,grace,donald] = hire

manager(alan,elon)
manager(grace,elon)
manager(donald,elon)

function manager(hire,boss){
  hire.manager = boss
}
// send to training

function skills(hire,skill){
  if(!hire.skills){
    hire.skills =[]
    hire.skills.push(skill)
  }else{
    hire.skills.push(skill)
  }
}

skills(alan,"Mathematics")
skills(grace,"Cobol")
skills(donald,"Computational Complexity")

// whoops!  new person hired later on, do the same again for him

let tim = new Employee ("Tim Berners-Lee","tim.berners_lee@musky.com","Computer Science","Networks")
manager(tim,elon)
skills(tim,"Protocols")

console.log(listEmployes(hire))

function listEmployes(employee){
  let employeelist=""
  for (var i = 0; i < employee.length; i++) {
    employeelist+= ` ${employee[i].name} is a ${employee[i].position} working on ${employee[i].project}.`+
    ` He can be reached at ${employee[i].email}. His boss is ${employee[i].manager.name} and skiils include ${employee[i].skills}. `
  }
  return employeelist
}
// console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
// console.log(`He can be reached at ${alan.email}. His boss is ${alan.manager.name}`)
// console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
// console.log(`She can be reached at ${grace.email} and hes got skills in ${alan.skills}`)
// console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
// console.log(`He can be reached at ${donald.email}`)
// console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
// console.log(`He can be reached at ${tim.email}`)
