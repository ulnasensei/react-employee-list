import React from "react";
import Employee from "../employee/Employee";
import "./EmployeeList.css";

const EmployeeList = ({ data }) => {
    return (
        <div className="employeeList">
            {data.map((employee) => (
                <Employee key={data.id} employee={employee} />
            ))}
        </div>
    );
};

export default EmployeeList;
