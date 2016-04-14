module.exports = function(recordsList, regNumber){
  var recs = [];
  recordsList.map(function(record){
    if(record.RegistrationNumber === regNumber){
      var result = {
        RegistrationNumber : record.RegistrationNumber,
        Route : record.Route,
        Fare : record.Fare,
        Trips : record.Trips
      }
      recs.push(result);
    }
  })
  return recs;
}
