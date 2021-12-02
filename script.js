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
}
