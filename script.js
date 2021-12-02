//variable declaration of inputs
const birth_month = document.getElementById("mob");
const birth_date = document.getElementById("dob");
const birth_year = document.getElementById("yob");
const user_gender = document.getElementById("gender")

function generateAkan() {
  var day = parseInt(birth_date.value);
  var month = parseInt(birth_month.value);
  var year = parseInt(birth_year.value);
  var gender = user_gender.value;
  
   //extracting part of year string to get CC and YY
  var CC = parseInt(year.toString().slice(0, 2));
  var YY = parseInt(year.toString().slice(-2));
  var MM = month;
  var DD = day;
  
   //gender name array
  var maleNames = [
    "Kwasi",
    " Kwadwo",
    "Kwabena",
    "Kwaku",
    "Yaw",
    "Kofi",
    "Kwame",
  ];
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
  var daysOfTheWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
}
