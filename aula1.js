let name = "Isabeli";
name = "Rosana";

for (var i = 0; i < 3; i++) {
  console.log(i);
}

console.log("Outside: ", i);

function checkPassword(password) {
  const valid = password.length > 6;
  if (valid) {
    const message = "Your password is valid";
    console.log(message);
  } else {
    const message = "Your password is not valid";
    console.log(message);
  }
}

checkPassword("123");
checkPassword("1234567");
