// StaffRow.js
import React from "react";

const StaffRow = ({ results }) => {
  return (
    <tr>
      <td>
        <img src={results.picture.thumbnail} alt={`${results.name.first} ${results.name.last}`} />
      </td>
      <td>
        <a href={`mailto:${results.email}`}>{results.name.first} {results.name.last}</a>
      </td>
      <td>{results.phone}</td>
      <td>{results.location.city}</td>
    </tr>
  );
};

export default StaffRow;