// Models for the job Collection

// Import dependencies.
import mongoose from 'mongoose';
import 'dotenv/config';

// Connect based on the .env file parameters.
mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);
const db = mongoose.connection;

// Confirm that the database has connected and print a message in the console.
db.once("open", (err) => {
    if(err){
        res.status(500).json({ Error: 'Failed to connect to the database, please try again.' });
    } else  {
        console.log('Success: Connected to database.');
    }
});

// SCHEMA: Define the collection's schema.
const jobSchema = mongoose.Schema({
	company:   { type: String, required: true },
	wage:      { type: Number, required: true, min:0},
	startDate: { type: Date, required: true}
});

// Compile the model from the schema 
// by defining the collection name "job".
const jobs = mongoose.model('jobs', jobSchema);


// CREATE model *****************************************
const createJob = async (company, wage, startDate) => {
    const job = new jobs({ 
        company: company, 
        wage: wage, 
        startDate: startDate 
    });
    return job.save();
}


// RETRIEVE model *****************************************
// Retrieve all documents and return a promise.
const retrieveJob = async () => {
    const query = jobs.find();
    return query.exec();
}

// RETRIEVE by ID
const retrieveJobByID = async (_id) => {
    const query = jobs.findById({_id: _id});
    return query.exec();
}

// DELETE model based on _id  *****************************************
const deleteJobById = async (_id) => {
    const result = await jobs.deleteOne({_id: _id});
    return result.deletedCount;
};


// UPDATE model *****************************************************
const updateJob = async (_id, company, wage, startDate) => {
    const result = await jobs.replaceOne({_id: _id }, {
        company: company,
        wage: wage,
        startDate: startDate
    });
    return { 
        _id: _id, 
        company: company,
        wage: wage,
        startDate: startDate 
    }
}

// EXPORT the variables for use in the controller file.
export { createJob, retrieveJob, retrieveJobByID, updateJob, deleteJobById }