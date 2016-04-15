module.exports = function(listOfRoutes, regNumber){
  var routesList =[];
  listOfRoutes.forEach(function(route){
    if(route.RegistrationNumber === regNumber){
      routesList.push(route.Route)
    }
  })
  // console.log(routesList)
  return routesList;
}
