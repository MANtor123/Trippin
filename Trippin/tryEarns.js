var capeTownTaxis = [
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Bellville",
    "Fare": 13,
    "Trips": 9
  },
  {
    "RegistrationNumber": "CA 234 567",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 123 456",
    "Route": "Cape Town - Gugulethu",
    "Fare": 12,
    "Trips": 11
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Langa",
    "Fare": 8,
    "Trips": 13
  },
  {
    "RegistrationNumber": "CA 345 678",
    "Route": "Cape Town - Cape Town",
    "Fare": 13,
    "Trips": 10
  }
];

var func = function(earningsList){
  var totalEarnings =[];
  var obj = {};
  earningsList.forEach(function(taxi){

    var reg = taxi.RegistrationNumber;
    var earns = taxi.Fare * taxi.Trips;

    if(obj[reg] == undefined){
      obj[reg] = 0;
    }

    obj[reg] = obj[reg] + earns;

  })
  console.log(obj)

  for(var key in obj){
    var result = {
      RegistrationNumber : key,
      Earnings : obj[key]
    }
    totalEarnings.push(result)
  }
  console.log(totalEarnings)
  return totalEarnings
}


func(capeTownTaxis);
