var util = require('util');
var mongoClient = require('mongoconnection').mongoClient;

exports.getConfig = function(params, callback) {
	console.log("In getConfig() call");
	var cfg = require("config.js");
	exports.config = config;
	return callback(null, {
		config : cfg.config
	});
};

exports.getStudents= function(params, callback){
	
	mongoClient.connect('mongodb://' + upString + '@' + host + '/' + database,
			function(err, db) {
				if (err)
					return callback(err);
				var collection = db.collection(params.collection);
				collection.insert(params.insert, function(err, docs) {
					db.close();
					return callback(null, docs);
				});
			});
};

exports.addStudent= function(params, callback){};
exports.removeStudent= function(params, callback){};

exports.addRecord = function(params, callback) {
	console.log("Adding record to db");
	$fh.db({
		"act" : "create",
		"type" : "myFirstEntity",
		"fields" : {
			"firstName" : "Joe",
			"lastName" : "Bloggs",
			"address1" : "22 Blogger Lane",
			"address2" : "Bloggsville",
			"country" : "Bloggland",
			"phone" : "555-123456"
		}
	}, function(err, data) {
		if (err) {
			console.log("Error " + err);
		} else {
			console.log("Data uploaded to db");
			console.log(JSON.stringify(data));
			return callback(null, {
				data : data
			});
			/*
			 The output will be something similar to this
			 {
			  "fields": {
			    "address1": "22 Blogger Lane",
			    "address2": "Bloggsville",
			    "country": "Bloggland",
			    "fistName": "Joe",
			    "lastName": "Bloggs",
			    "phone": "555-123456"
			  },
			  "guid": "4e563ea44fe8e7fc19000002",
			  "type": "myFirstEntity"
			}
			 */
		}
	});
};