module.exports = function(tripList){

  var total =0;

  tripList.forEach(function(trips){
    total = total + trips.Trips;
  })

  return total;
}
