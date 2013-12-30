
module.exports = {
    "production": {
    //  "driver":  "mysql", 
    // "host" : "hereiam.eu01.aws.af.cm", 
    //  "port":3306, 
    //  "user":"uCQzhYobvdUzt",
    //  "username": "uCQzhYobvdUzt",  
    //  "password": "pxIqif9BpkIbB",  
    //  "database": "d6b8a2413fbb143969f8b4410942ce15f", 
    //  "name":"d6b8a2413fbb143969f8b4410942ce15f" 
	 "driver":   "memory"
    },

    "test": {
        "driver":   "memory"
    },

    "development": {
        "driver": "mysql",
        "host": "localhost",
        "port": "3306",
        "database": "hrmnode",
        "username": "root",
        "password": ""
    }
};

