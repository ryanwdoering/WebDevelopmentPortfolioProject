import React, { useState }  from 'react';
import { useNavigate } from "react-router-dom";

export const EditJobPageForm = ({ jobToEdit }) => {
 
    const [company, setCompany]       = useState(jobToEdit.company);
    const [startDate, setDate]         = useState(jobToEdit.startDate);
    const [wage, setWage] = useState(jobToEdit.wage);
    
    const redirect = useNavigate();

    const editJob = async () => {
        const response = await fetch(`/jobs/${jobToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ 
                company: company, 
                startDate: startDate, 
                wage: wage
            }),
            headers: {'Content-Type': 'application/json',},
        });

        if (response.status === 200) {
            alert(`Job edited successfully.`);
        } else {
            const errMessage = await response.json();
            alert(`Edit failed. Please try again. ${response.status}. ${errMessage.Error}`);
        }
        redirect("/JobsPage");
    }

    return (
        <>
        <article>
            <h2>Edit a Job</h2>
            <p>This page allows the user to update a 'Job' object.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="company">Job company</label>
                    <input
                        type="text"
                        value={company}
                        onChange={e => setCompany(e.target.value)} 
                        id="company" />
                    
                    <label for="startDate">Date released</label>
                    <input
                        type="date"
                        value={startDate}
                        onChange={e => setDate(e.target.value)} 
                        id="startDate" />

                    <label for="wage">Wage</label>
                    <input
                        type="number"
                        value={wage}
                        onChange={e => setWage(e.target.value)} 
                        id="wage" />

                    <label for="submit">
                    <button
                        onClick={editJob}
                        id="submit"
                    >Save</button> Job edits to history</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}
export default EditJobPageForm;