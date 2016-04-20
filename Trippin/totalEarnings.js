module.exports = function(earningsList){
    var totalEarnings =[];
    var earningsObjects = {};
    earningsList.forEach(function(taxi){
      var RegistrationNumber = taxi.RegistrationNumber;
      var earns = (taxi.Fare * taxi.Trips);
      if(earningsObjects[RegistrationNumber] == undefined){
        earningsObjects[RegistrationNumber] = 0;
      }
      earningsObjects[RegistrationNumber] = earningsObjects[RegistrationNumber] + earns;
    })
    for(var key in earningsObjects){
      var result = {
        RegistrationNumber : key,
        Earnings : earningsObjects[key]
      }
      totalEarnings.push(result)
    }
    return totalEarnings;
  }
