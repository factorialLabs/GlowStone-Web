// Manages reservation information
app.factory("Beacons", function (){
    var beacons = [];

    return {
        beacons: beacons,
        addBeacon: function (newBeacon){
            /*
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
            */
            beacons.push(newBeacon);
        },
        getBeacon: function (id){
            for (var i = 0; i < beacons.length; i++){
                if (beacons[i].id === id){
                    return {beacon: beacons[i],
                            index: i};
                }
            }
            return false;
        },
        updateBeacon: function (updatedBeacon, index){
            beacons[index] = updatedBeacon;
            // parse stuff to update server
        }
    }
});
