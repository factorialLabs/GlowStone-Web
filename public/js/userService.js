// Manages reservation information
app.factory("Beacons", function (){

    Parse.initialize("aMCN1DWIofhjx7Q2S4ezuOljE3A5FyJtRgAZm0sC", "qzQf1OZEgv2bjhK1uyKPScXZfLEmkGQ4z3vsmg1m");
    var beacons = [];

    return {
        beacons: beacons,
        addBeacon: function (newBeacon){
            var Beacon = Parse.Object.extend("Beacon");
            var beacon = new Beacon();
            beacon.set("beacon", newBeacon)
            beacon.save(null, {
                success: function (result){
                  newBeacon.objectId = result.id
                  beacons.push(newBeacon);
                },
                error: function (beacon, error){
                    console.log(error);
                }
            });
            
        },
        getBeaconFromParse: function(){
            var Beacon = Parse.Object.extend("Beacon");
            var query = new Parse.Query(Beacon);
            console.log("called")
            query.find({
                success: function (results){
                    beacons = results;
                    return beacons;
                },
                error: function(error){
                    console.error('Error:', error)
                }
            });
        },

        getBeacon: function (id){
            for (var i = 0; i < beacons.length; i++){
                console.log(beacons[i])
                if (beacons[i].id === id){
                    return {beacon: beacons[i], index: i};
                }
            }
            return false;
        },

        updateBeacon: function (updatedBeacon, index){
            var Beacon = Parse.Object.extend("Beacon");
            var query = new Parse.Query(Beacon);
            var beaconObjectId = beacons[index].objectId
            var updatedBeaconForParse = updatedBeacon
            delete updatedBeaconForParse.$$hashKey

            query.get(beaconObjectId, {
                success:function(result){
                    result.set("beacon", updatedBeacon);
                    result.save(null,{
                        success:function(beacon){
                            beacons[index] = updatedBeacon;
                        },
                        error:function(beacon, error){
                            console.log(error)
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
