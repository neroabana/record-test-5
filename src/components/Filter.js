
import React from "react";

import {PropTypes} from "prop-types";

import "../styles/Filter.css";

const Filter = ({sortName, sortAge}) => {  
  return (
    <>    
      <div id="control-box">
        <div id="control-name">
          <input
            type="checkbox"
            onChange={sortName}
            name="name_check"
            data-testid="name"
          />{" "}
          <label htmlFor="name_check">Name</label>
        </div>
        <div id="control-age">
          <input
            type="checkbox"
            onClick={sortAge}
            name="age_check"
            data-testid="age"
          />{" "}
          <label htmlFor="age_check">Age</label>
        </div>
      </div>
    </>
  );
};

Filter.propTypes = {
  
  sortName: PropTypes.func,
  sortAge: PropTypes.func,
};

export default Filter;
