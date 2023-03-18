function getInfo(name, age) {
  return "Name: ${name} - Age: ${age}";
}
console.log(getInfo("Isabeli", 27));

const getInfo2 = (name, age) => {
  return "Name: ${name} - Age: ${age}";
};
console.log(getInfo2("Isabeli", 27));

const getInfo3 = (name, age) => "Name: ${name} - Age: ${age}";
console.log(getInfo3("Isabeli", 27));

console.log(greeting());
function greeting() {
  return "Hey there!";
}

var radius = 5;
const shape = {
  radius: 10,
  diameter: function () {
    return this.radius * 2;
  },
  diameter2: () => this.radius * 2,
};

//console: shape.diameter()
//console: shape.diameter2()
