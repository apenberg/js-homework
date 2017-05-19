var street = ['River Road',' 6th Avenue', ' Broadway Avenue'];
var city = ['Yaphank', 'Shirley', 'NYC']
var state = ['NY', 'AZ', 'CA']
var randomStreet = Math.floor(Math.random()*street.length);
var randomElement = street[randomStreet];
var randomCity = Math.floor(Math.random()*city.length);
var randomElement1 = city[randomCity];
var randomState = Math.floor(Math.random()*state.length);
var randomElement2 = state[randomState];
console.log(Math.round(Math.random()*10000000) + " " + randomElement + ", " + randomElement1 + ", " + randomElement2);




