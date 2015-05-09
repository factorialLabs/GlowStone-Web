// Manages reservation information
app.factory("Beacons", function (){
    var beacons = [];

    return {
        beacons: beacons,
        addBeacon: function (newBeacon){
            var Beacon = Parse.Object.extend({
                className: "Beacon" 
            });
            Beacon.save(newBeacon, {
                success: function (newBeacon){
                    console.log(newBeacon);
                },
                error: function (newBeacon, error){
                    console.log(error);
                }
            });
            beacons.push(newBeacon);
        }
    }
});
