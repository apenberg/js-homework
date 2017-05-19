var street = ['River Road',' 6th Avenue', ' Broadway Avenue'];
var city = ['Yaphank', 'Shirley', 'NYC']
var state = ['NY', 'AZ', 'CA']
var randomStreet = street[Math.floor(Math.random()*street.length)];
var randomCity = city[Math.floor(Math.random()*city.length)];
var randomState = state[Math.floor(Math.random()*state.length)];
console.log(Math.round(Math.random()*1000) + " " + randomStreet + ", " + randomCity+ ", " + randomState);




