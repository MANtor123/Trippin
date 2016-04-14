module.exports = function(earningsList){
  var totalEarnings = [];

  earningsList.map(function(taxi){
    var result = {
      RegistrationNumber : taxi.RegistrationNumber,
      Earnings : (taxi.Fare * taxi.Trips)
    }
    totalEarnings.push(result);
  })
  return totalEarnings;
}
