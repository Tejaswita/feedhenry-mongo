var util = require('util');

exports.getConfig = function(params, callback) {
  console.log("In getConfig() call");
  var cfg = require("config.js");
  return callback(null, {config: cfg.config});
};

exports.addRecord = function(params, callback){
  console.log("Adding record to db");
	$fh.db({
		  "act": "create",
		  "type": "myFirstEntity",
		  "fields": {
		    "firstName": "Joe",
		    "lastName": "Bloggs",
		    "address1": "22 Blogger Lane",
		    "address2": "Bloggsville",
		    "country": "Bloggland",
		    "phone": "555-123456"
		  }
		}, function(err, data) {
		  if (err) {
		    console.log("Error " + err);
		  } else {
   	    console.log("Data uploaded to db");
		    console.log(JSON.stringify(data));
		    return  callback(null, {data:data});
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