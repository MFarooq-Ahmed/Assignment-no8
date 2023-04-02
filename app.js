function calculateZakat() {
    var income = document.getElementById("income").value;
    var savings = document.getElementById("savings").value;
    var gold = document.getElementById("gold").value;
    var silver = document.getElementById("silver").value;
  
    var totalWealth = (income / 40) + (savings / 40) + ((gold * 207800) / 40) + ((silver * 2521) / 40);
    var nisab = 0.9250616848783;
  
    if (totalWealth < nisab) {
      document.getElementById("result").innerHTML = "You are not eligible to pay Zakat.";
    } else {
       zakat = totalWealth;
      document.getElementById("result").innerHTML = "Your Zakat is:" + Math.floor(zakat);
    }
  }