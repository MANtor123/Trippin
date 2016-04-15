module.exports = function(tripsList2, regNumber){
  var trips2 = 0;
  tripsList2.forEach(function(rec){
    if(rec.RegistrationNumber === regNumber){
      trips2 = trips2 + rec.Trips;
    }
  })
  return trips2;
}
