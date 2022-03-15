//1.Solving problems using array functions on rest countries data.
//a.Get all the countries from Asia continent /region using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.onload = function () {
  //please provide me data if my request lies in range 200-299
  if (xhr.status >= 200 && xhr.status < 300) {
    let countries = JSON.parse(this.response);
   let asiaCOuntries = countries.filter(country => country.region === 'Asia')
   console.log('asia countries', asiaCOuntries)
  }
}
xhr.send()

   // b. Get all the countries with a population of less than 2 lakhs using Filter function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let countries = JSON.parse(this.response);

   let population = countries.filter(country => country.population < 200000)
   console.log('countries with less that 2lakh population', population)
  }
}
xhr.send()

  //  c. Print the following details name, capital, flag using forEach function
   var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let countries = JSON.parse(this.response);
   countries.forEach((country) => {
     console.log("Name :", country.name.common)
     console.log("Capital :", country.capital && country.capital[0])
     console.log("Flag :", country.flag && country.flag[0])
   });
}
}
xhr.send()

   

   // d.Print the total population of countries using reduce function
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let countries = JSON.parse(this.response);
   const reducer = (accumulator, item) => {
     return accumulator + item.population;
   };

   const total = countries.reduce(reducer, 0)
   console.log('total population', total)
  }
};
xhr.send()

// 5. Print the country which uses US Dollars as currency.
var xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");

xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    let countries = JSON.parse(this.response);

   let filtered = countries.filter(function (country) {
     return country.currencies?.hasOwnProperty('USD')
   });
   console.log(filtered)
}
}
xhr.send()

    