import { React, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import JobList from '../components/JobList';
import { Link } from 'react-router-dom';


function JobsPage({ setJob }) {
    // Use the Navigate for redirection
    const redirect = useNavigate();

    // Use state to bring in the data
    const [jobs, setjobs] = useState([]);

    // RETRIEVE the entire list of jobs
    const loadjobs = async () => {
        const response = await fetch('/jobs');
        const jobs = await response.json();
        setjobs(jobs);
    } 
    

    // UPDATE a single job
    const onEditJob = async job => {
        setJob(job);
        redirect("/update");
    }


    // DELETE a single job  
    const onDeleteJob = async _id => {
        const response = await fetch(`/jobs/${_id}`, { method: 'DELETE' });
        if (response.status === 200) {
            const getResponse = await fetch('/jobs');
            const jobs = await getResponse.json();
            setjobs(jobs);
        } else {
            console.error(`Job at ${_id} not successfully deleted, status code = ${response.status}`)
        }
    }

    // LOAD all the jobs
    useEffect(() => {
        loadjobs();
    }, []);

    // DISPLAY the jobs
    return (
        <>
            <h2>List of jobs</h2>
            <p>This page displays the database of jobs as a table of values</p>
            <JobList 
                jobs={jobs} 
                onEdit={onEditJob} 
                onDelete={onDeleteJob} 
            />
            <Link to="/create">Add Job</Link>
        </>
    );
}

export default JobsPage;