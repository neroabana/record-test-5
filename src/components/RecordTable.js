import React from "react";
import { PropTypes } from "prop-types";
import "../styles/RecordTable.css";

const RecordTable = ({ data }) => {
  return(
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Date of Birth</th>
          </tr>
        </thead>
        <tbody>
          {data
            ? data.map((val, key) => (
                <tr key={key}>
                  <td>{val.name}</td>
                  <td>{val.dob}</td>
                </tr>
              ))
            : null}
        </tbody>
      </table>
    </>
  );
};

RecordTable.propTypes = {
  data: PropTypes.array,
};

export default RecordTable;
