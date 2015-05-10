// Manages reservation information
app.factory("Beacons", function (){

    Parse.initialize("aMCN1DWIofhjx7Q2S4ezuOljE3A5FyJtRgAZm0sC", "qzQf1OZEgv2bjhK1uyKPScXZfLEmkGQ4z3vsmg1m");
    var beacons = [];

    return {
        beacons: beacons,
        addBeacon: function (newBeacon){
            var Beacon = Parse.Object.extend("Beacon");
            var beacon = new Beacon();
            beacon.set("beacon", newBeacon);
            beacon.save(null, {
                success: function (result){
                    beacons = result
                    console.log(beacons)
                },
                error: function (beacon, error){
                    console.log(error);
                }
            });
            
        },
        getBeaconFromParse: function(){
            console.log("trying update")
            var Beacon = Parse.Object.extend("Beacon");
            var query = new Parse.Query(Beacon);
            console.log("called");
            query.find()
            .then(function(results){
                console.log(results);
                beacons = results;
            });
        },

        getBeacon: function (beacons, id){
            // console.log(beacons)
            for (var i = 0; i < beacons.length; i++){
                if (beacons[i].id == id){
                    return {beacon: beacons[i], index: i};
                }
            }
            return false;
        },

        updateBeacon: function (updatedBeacon, index){
            var updatedBeaconForParse = updatedBeacon;
            delete updatedBeaconForParse.$$hashKey;

            var Beacon = Parse.Object.extend("Beacon");
            var query = new Parse.Query(Beacon);
            query.equalTo("beacon.id", updatedBeacon.id)

            query.first({
                success:function(result){
                    console.log(result);
                    result.set("beacon", updatedBeacon);
                    result.save(null,{
                        success:function(beacon){
                            beacons = beacon;
                            console.log("modified");
                        },
                        error:function(beacon, error){
                            console.log(error);
                        }
                    });
                },
                error: function(result, error){
                    console.log(error);
                }
            });
        },

        deleteBeacon: function (toDeleteBeacon){
            console.log(toDeleteBeacon);
            var Beacon = Parse.Object.extend("Beacon");
            var query = new Parse.Query(Beacon);
            query.equalTo("beacon.id", toDeleteBeacon.id)

            query.first({
                success:function(result){
                    result.destroy();
                    result.save(null,{
                        success:function(beacon){
                            beacons = beacon;
                            console.log("deleted");
                        },
                        error:function(beacon, error){
                            console.log(error);
                        }
                    });
                },
                error: function(result, error){
                    console.log(error);
                }
            });            
        }
    }
});
