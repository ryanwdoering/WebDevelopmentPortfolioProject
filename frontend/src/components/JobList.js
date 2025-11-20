import React from 'react';
import Job from './Job';

// Change the function names and parameters 
// to fit your portfolio topic and schema.

function JobList({ jobs, onDelete, onEdit }) {
    return (
        <table id="jobs">
            <caption>Employment History</caption>
            <thead>
                <tr>
                    <th>Company</th>
                    <th>Start Date</th>
                    <th>Hourly Wage</th>
                    <th>Delete</th>
                    <th>Edit</th>
                </tr>
            </thead>
            <tbody>
                {jobs.map((job, i) => 
                    <Job 
                        job={job} 
                        key={i}
                        onDelete={onDelete}
                        onEdit={onEdit} 
                    />)}
            </tbody>
        </table>
    );
}

export default JobList;
