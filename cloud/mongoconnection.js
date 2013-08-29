var mongoClient = require("mongodb").MongoClient, 
				format = require('util').format, 
				user = process.env.MONGODB_USER, 
				password = process.env.MONGODB_PASSWORD,
				upString = (typeof user === 'string' && typeof password === 'string') ? user
						+ ":" + password
						: "", 
				database = process.env.MONGODB_DATABASE, 
				host = process.env.MONGODB_HOST;

