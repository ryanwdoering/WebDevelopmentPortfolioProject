import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

// Change the icons, function names, and parameters 
// to fit your portfolio topic and schema.

export const AddJobPageForm = () => {

    const [company, setCompany]       = useState('');
    const [startDate, setDate]         = useState('');
    const [wage, setWage] = useState('');
    
    const redirect = useNavigate();

    const addJob = async () => {
        const newJob = { company, startDate, wage };
        const response = await fetch('/jobs', {
            method: 'post',
            body: JSON.stringify(newJob),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            alert(`Job Added Successfully`);
            redirect("/JobsPage");
        } else {
            alert(`Something went wrong, please try again. Status Code = ${response.status}`);
            redirect("/JobsPage");
        }
    };


    return (
        <>
        <article>
            <h2>Add a job</h2>
            <p>This page allows the user to enter data about a previous job. The data is stored as a 'Job' JSON object on the MongoDB Database for later retrieval and use.</p>
            <form onSubmit={(e) => { e.preventDefault();}}>
                <fieldset>
                    <label for="company">Company</label>
                    <input
                        type="string"
                        placeholder="Placeholder Inc."
                        value={company}
                        onChange={e => setCompany(e.target.value)} 
                        id="company" />
                    
                    <label for="startDate">Start Date</label>
                    <input
                        type="date"
                        value={startDate}
                        placeholder="DD/MM/YYYY"
                        onChange={e => setDate(e.target.value)} 
                        id="startDate" />

                    <label for="wage">Hourly Wage</label>
                    <input
                        type="number"
                        placeholder="0.00"
                        value={wage}
                        onChange={e => setWage(e.target.value)} 
                        id="wage" />

                    <label for="submit">
                    <button
                        type="submit"
                        onClick={addJob}
                        id="submit"
                    >Add</button> to history</label>
                </fieldset>
                </form>
            </article>
        </>
    );
}

export default AddJobPageForm;