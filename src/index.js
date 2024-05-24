const 
    express         = require('express'),
    verifyJWT       = require('./middleware/verifyJWT'),
    mongoose        = require('mongoose'),
    cookieParser    = require('cookie-parser'),
    cors            = require('cors'),
    connectDB       = require('./config/dbConn');


require('dotenv').config();
const PORT = process.env.PORT || 3500;



const app = express();

// CORS configuration
const corsOptions = {
    origin: 'http://localhost:3000', // Allow requests from this origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Allowed headers
    credentials: true // Allow credentials
};

// Use the CORS middleware with the defined options
app.use(cors(corsOptions));
// Connect to MongoDB
connectDB();

// MIDDLEWARE
app.use(express.json({limit: '10mb'}));

//middleware for cookies
app.use(cookieParser());

// routes AUTH + JWT
app.use('/auth',        require('./routes/auth'));
app.use('/refresh',     require('./routes/refresh'));
app.use('/logout',      require('./routes/logout'));
// Spravka
app.use('/public/spravka',       require('./routes/public/spravka'));
app.use('/hid/createdoctor',     require('./routes/register'));
app.use(verifyJWT);
app.use('/api/spravka',          require('./routes/api/spravkaAPI'));

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
});