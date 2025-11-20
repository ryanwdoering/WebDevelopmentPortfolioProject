import React, { useState } from "react";
import StaffRow from "../components/StaffRow";

const StaffPage = () => {
  const [results, setResults] = useState([]);

  const fetchData = () => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        return response.json();
      })
      .then((data) => {
        setResults(data.results);
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };

  return (
    <div>
      <h2>Staff Page</h2>
      <article>
        <p>This page displays information about the staff.</p>
        <button onClick={fetchData}>Fetch Staff</button>
        <table>
          <caption>Staff Information</caption>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {results.map((staff, index) => (
              <StaffRow key={index} results={staff} />
            ))}
          </tbody>
        </table>
      </article>
    </div>
  );
};

export default StaffPage;