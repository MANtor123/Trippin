module.exports = function(minimumTrips){
  var min = 10000000;
  minimumTrips.forEach(function(trips){
    if(trips.Trips < min){
      min = trips.Trips;
    }
  })
  return min;
}
