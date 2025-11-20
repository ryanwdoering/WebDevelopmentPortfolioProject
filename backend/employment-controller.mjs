// Controllers for the job Collection

import 'dotenv/config';
import express from 'express';
import * as jobs from './employment-model.mjs';

const PORT = process.env.PORT;
const app = express();
app.use(express.json());  // REST needs JSON MIME type.


// CREATE controller ******************************************
app.post ('/jobs', (req,res) => { 
    jobs.createJob(
        req.body.company, 
        req.body.wage, 
        req.body.startDate
        )
        .then(job => {
            console.log(`"${job.company}" job object was initialized and added to the collection of jobs.`);
            res.status(201).json(job);
        })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to create job. Please check your request data.' });
        });
});


// RETRIEVE controller ****************************************************
app.get('/jobs', (req, res) => {
    jobs.retrieveJob()
        .then(jobs => { 
            if (jobs !== null) {
                console.log(`All jobs were retrieved from the collection.`);
                res.json(jobs);
            } else {
                res.status(404).json({ Error: 'No jobs found.' });
            }         
         })
        .catch(error => {
            console.log(error);
            res.status(400).json({ Error: 'Failed to retrieve jobs. Please try again later.' });
        });
});


// RETRIEVE by ID controller
app.get('/jobs/:_id', (req, res) => {
    jobs.retrieveJobByID(req.params._id)
    .then(job => { 
        if (job !== null) {
            console.log(`"${job.company}" was retrieved, based on its ID.`);
            res.json(job);
        } else {
            res.status(404).json({ Error: 'Job not found.' });
        }         
     })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to retrieve job by ID. Please check the ID and try again.' });
    });

});


// UPDATE controller ************************************
app.put('/jobs/:_id', (req, res) => {
    jobs.updateJob(
        req.params._id, 
        req.body.company, 
        req.body.wage, 
        req.body.startDate
    )
    .then(job => {
        console.log(`"${job.company}" was updated.`);
        res.json(job);
    })
    .catch(error => {
        console.log(error);
        res.status(400).json({ Error: 'Failed to update job. Please check your request data and try again.' });
    });
});


// DELETE Controller ******************************
app.delete('/jobs/:_id', (req, res) => {
    jobs.deleteJobById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                console.log(`Based on its ID, ${deletedCount} job was deleted.`);
                res.status(200).send({ Success: 'Specified job successfully deleted' });
            } else {
                res.status(404).json({ Error: 'No job found with the provided ID.' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Failed to delete job. Please try again later.' });
        });
});


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});