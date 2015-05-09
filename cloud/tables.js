var query = new Parse.Query('Table') 

var tablesList = query.find({
	success: function (results){
		return results
	},
	error: function(error){
		console.error('Error:', error)
	}
});

var isAvalaible = function(tableId){
	query.get(tableId , {
		success:function(table){
			if(table.Status == "Available") return true
			else return false
		},
		error: function(error){
			console.error('Error:', error)
		}
	})
}

var selectTable = function (users){
	groupSize = users.length
	for (var table in tablesList){
		if(table.capacity >= groupSize && isAvailable(table._id)){
			return table
		}
	}

	var queueQuery = new Parse.Queue('Queue')

	var queue = queueQuery.find({
		success: function(existingQueue){
			existingQueue.push(users[0])
		},
		error: function(){
			var Queue = Parse.Object.extend("Queue")
			var newQueue = new Queue()
		}
	})

}