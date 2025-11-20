import React from 'react';

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

import { GrClose, GrEdit } from 'react-icons/gr';


function Job({ job, onEdit, onDelete }) {
    return (
        <tr>
            <td>{job.company}</td>
            <td>{job.startDate.split('T')[0]}</td>
            <td>{job.wage}</td>

            {/* Update these icons to something that matches your style. */}
            <td><GrClose onClick={() => onDelete(job._id)} /></td>
            <td><GrEdit onClick={() => onEdit(job)} /></td>
        </tr>
    );
}

export default Job;