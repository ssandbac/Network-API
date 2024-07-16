const mongoose = require('mongoose');

// Wrap Mongoose around local connection to MongoDB
const connectionString = process.env.MONGODB_URL;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Export connection 
module.exports = mongoose.connection;