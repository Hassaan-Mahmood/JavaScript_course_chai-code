// const accountID = 1122;
// 131415161718

// let accountName = "Hassaan";
// var accountPassword = 1234;
// accountCity = "Karachi";
// // accountState;

// accountId = 810011;
// accountName = "Hassaan Mahmood";
// accountPassword = 4444;
// accountCity = "sukkur";

// // console.log(accountName);
// console.table([accountID,accountName,accountPassword,accountCity])

let cities = ["Karachi, Hyderabad, Sukkur, Peshawar, Islamabad"];
// isFound = false;

for (let index = 0; index < cities.length; index++) {
  if (cities[index] === "Karachi") {
    console.log("It is one of the cleanest city");
  } else {
    console.log("It is not of the cleanest city");
  }
  console.log(cities[index]);
}
