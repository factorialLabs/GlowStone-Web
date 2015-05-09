// Manages reservation information
app.factory("Beacons", function (){

    Parse.initialize("aMCN1DWIofhjx7Q2S4ezuOljE3A5FyJtRgAZm0sC", "qzQf1OZEgv2bjhK1uyKPScXZfLEmkGQ4z3vsmg1m");
    

    /*var TestObject = Parse.Object.extend("TestObject");
    var testObject = new TestObject();
    testObject.save({foo: "bar"}).then(function(object) {
                alert("yay! it worked");
            });
    */
    var beacons = [];

    return {
        beacons: beacons,
        addBeacon: function (newBeacon){
            var Beacon = Parse.Object.extend("Beacon");
            var beacon = new Beacon()
  

            beacon.save(newBeacon, {
                success: function (newBeacon){
                    console.log(newBeacon);
                    console.log("Beacon")
                    console.log(beacon)
                },
                error: function (newBeacon, error){
                    console.log(error);
                }
            });
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
