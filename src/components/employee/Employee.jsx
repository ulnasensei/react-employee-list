import React from "react";
import "./Employee.css";
import { Columns, Image, Content } from "react-bulma-components";

const Employee = ({ employee }) => {
    const { name, age, image, email } = employee;
    return (
        <Columns className="employee">
            <Columns.Column size={3}>
                <Image rounded size={96} src={image} alt="" />
            </Columns.Column>
            <Columns.Column size={8} offset={1}>
                <Content>
                    <h5>{name}</h5>
                    <p>
                        {age} years old <br /> <a mailto={email}>{email}</a>
                    </p>
                </Content>
            </Columns.Column>
        </Columns>
    );
};

export default Employee;
