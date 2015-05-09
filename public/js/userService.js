// Manages reservation information
app.factory("Beacons", function (){
    var beacons = [];

    return {
        beacons: beacons,
        addBeacon: function (newBeacon){
            beacons.push(newBeacon);
        }
    }
});
