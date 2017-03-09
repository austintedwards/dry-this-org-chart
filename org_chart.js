
function Manager(name, email, position) {
    this.name = name;
    this.email = email;
    this.position = position;
}

let elon = new Manager("Elon Musk","elon.musk@musky.com","Boss")

function Hire(name, email, position, project){
    this.name = name;
    this.email = email;
    this.position = position;
    this.project = project;
}

let alan = new Hire("Alan Turing","alan.turing@musky.com","Computer Scientist","Cryptography")
let grace = new Hire("Grace Hopper","grace.hopper@musky.com","Computer Scientist","Compilers")
let donald = new Hire("Donald Knuth","donald.knuth@musky.com","Mathematician","Algorithm Analysis")

// assign each a manager
// let [alan, grace, donald] = new_hires
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
  }else{
    hire.skills.push(skill)
  }
}

skills(alan,"Mathematics")
skills(grace,"Cobol")
skills(donald,"Computational Complexity")

// whoops!  new person hired later on, do the same again for him

let tim = new Hire ("Tim Berners-Lee","tim.berners_lee@musky.com","Computer Science","Networks")
manager(tim,elon)
skills(tim,"Protocols")


console.log(`${alan.name} is a ${alan.position} working on ${alan.project}.`)
console.log(`He can be reached at ${alan.email}`)
console.log(`${grace.name} is a ${grace.position} working on ${grace.project}.`)
console.log(`She can be reached at ${grace.email}`)
console.log(`${donald.name} is a ${donald.position} working on ${donald.project}.`)
console.log(`He can be reached at ${donald.email}`)
console.log(`${tim.name} is a ${tim.position} working on ${tim.project}.`)
console.log(`He can be reached at ${tim.email}`)
