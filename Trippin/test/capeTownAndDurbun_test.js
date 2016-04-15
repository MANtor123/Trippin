var assert = require('assert');
var trips = require('../trips');
var minTrips = require('../minTrips');
var records = require('../records');
var trips2 = require('../trips2');
var namesOfRoutes = require('../namesOfRoutes');
var earnings = require('../earnings');
var totalEarnings = require('../totalEarnings');

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

//Durbun Info-|---------------------------------------------------------------
var durbanTaxis = [
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 14
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - University of KZN",
    "Fare": 7,
    "Trips": 18
  },
  {
    "RegistrationNumber": "ND 123 456",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 15
  },
  {
    "RegistrationNumber": "ND 234 567",
    "Route": "Durban - Umbilo",
    "Fare": 8,
    "Trips": 9
  },
  {
    "RegistrationNumber": "ND 345 678",
    "Route": "Durban - Umlazi Station",
    "Fare": 14,
    "Trips": 20
  }
];
  //---------------------------------------------------------------------

  //CAPE TOWN------------------------------------------------------------
describe('-Cape Town Statistics->>>', function(){
  //--------------Total Number of All Trips Made-------------------------
  it('should return total number of all trips made', function(){
    assert.equal(trips(capeTownTaxis), 54);
  });
  //--------------Lowest Number of Trips----------------------------------
  it('should return the lowest number of trips any taxi in Cape Town made',
  function(){
     assert.equal(minTrips(capeTownTaxis), 9);
 })
 //------------------Records for CA 123 456-------------------------------
 it("should return the number of records of the [-CA 123 456-]", function(){
   assert.deepEqual(records(capeTownTaxis, "CA 123 456"),
   [
     {
       RegistrationNumber : "CA 123 456",
       Route : "Cape Town - Bellville",
       Fare : 13,
       Trips : 9
     },
     {
       RegistrationNumber : "CA 123 456",
       Route : "Cape Town - Gugulethu",
       Fare : 12,
       Trips : 11
     }
   ]);
 });
 //---------------Number of trips CA 234 567 Made---------------
 it('should retun the number of Trips [-CA 234 567-] made', function(){
    assert.equal(trips2(capeTownTaxis, "CA 234 567"), 11);
  });
  //---------------Names of Routes CA 345 678---------------------
  it("should return names of all routes [-CA 345 678-] took", function(){
  assert.deepEqual(namesOfRoutes(capeTownTaxis, "CA 345 678"),
  ['Cape Town - Langa','Cape Town - Cape Town']);

  });
  //-------<<<---Total Earnings for [ CA 234 567 ]------------------
  it("should return the total earnings for [-A 234 567-]", function(){
  assert.equal(earnings(capeTownTaxis, "CA 234 567"), 132);
  });
  //----->>>>>---Total Earnings for [ Each Taxi ]--------------------
  it("should return total Earnings for each taxi", function(){
    assert.deepEqual(totalEarnings(capeTownTaxis),
    [{
      RegistrationNumber : 'CA 123 456',
      Earnings : 117
    },
    {
      RegistrationNumber : 'CA 234 567',
      Earnings : 132
    },
    {
      RegistrationNumber : 'CA 123 456',
      Earnings : 132
    },
    {
      RegistrationNumber : 'CA 345 678',
      Earnings : 104
    },
    {
      RegistrationNumber : 'CA 345 678',
      Earnings : 130
    }]
  )
  })
});

//DURBUN TAXIS-------------------------------------------------------------
  describe("-Durbun Statistics->>>", function(){
    //--------------Total Number of All Trips Made-------------------------
    it('should return total number of all trips made', function(){
      assert.equal(trips(durbanTaxis), 117);
    });
    //--------------Lowest Number of Trips----------------------------------
    it('should return the lowest number of trips any taxi in Cape Town made',
    function(){
       assert.equal(minTrips(durbanTaxis), 9);
   })
   //------------------Records for ND 123 456-------------------------------
   it("should return the number of records of the [-ND 123 456-]", function(){
     assert.deepEqual(records(durbanTaxis, "ND 123 456"),
     [
       {
         RegistrationNumber : "ND 123 456",
         Route : "Durban - University of KZN",
         Fare : 7,
         Trips : 14
       },
       {
         RegistrationNumber : "ND 123 456",
         Route : "Durban - Umbilo",
         Fare : 8,
         Trips : 15
       }
     ]);
   });
   //---------------Number of trips ND 234 567 Made---------------
   it('should retun the number of Trips [-ND 234 567-] made', function(){
      assert.equal(trips2(durbanTaxis, "ND 234 567"), 36);
    });
    //---------------Names of Routes ND 345 678---------------------
    it("should return names of all routes [-ND 345 678-] took", function(){
    assert.deepEqual(namesOfRoutes(durbanTaxis, "ND 345 678"),
    ['Durban - Umbilo','Durban - University of KZN', 'Durban - Umlazi Station']);

    });
    //-------<<<---Total Earnings for [ ND 234 567 ]------------------
    it("should return the total earnings for [-ND 234 567-]", function(){
    assert.equal(earnings(durbanTaxis, "ND 234 567"), 387);
    });
    //----->>>>>---Total Earnings for [ Each Taxi ]--------------------
    it("should return total Earnings for each taxi", function(){
      assert.deepEqual(totalEarnings(durbanTaxis),
      [{
        RegistrationNumber : 'ND 123 456',
        Earnings : 98
      },
      {
        RegistrationNumber : 'ND 234 567',
        Earnings : 126
      },
      {
        RegistrationNumber : 'ND 345 678',
        Earnings : 112
      },
      {
        RegistrationNumber : 'ND 234 567',
        Earnings : 126
      },
      {
        RegistrationNumber : 'ND 234 567',
        Earnings : 63
      },
      {
        RegistrationNumber : 'ND 345 678',
        Earnings : 126
      },
      {
        RegistrationNumber : 'ND 123 456',
        Earnings : 120
      },
      {
        RegistrationNumber : 'ND 234 567',
        Earnings : 72
      },
      {
        RegistrationNumber : 'ND 345 678',
        Earnings : 280
      }]
    )
    })
  })
