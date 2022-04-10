const mongoose = require('mongoose')

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/TheRelay', {   
   useNewUrlParser: true,   
   useUnifiedTopology: true
})
