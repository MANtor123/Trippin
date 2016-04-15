module.exports = function(listOfEarnings, regNumber){
  var result = 0;
  listOfEarnings.forEach(function(earning){
    if(earning.RegistrationNumber === regNumber){
      result = result + earning.Fare * earning.Trips;
    }
  });
  // console.log(result)
  return result;
};
