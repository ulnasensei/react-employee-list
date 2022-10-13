import React from "react";
import "./Header.css";
import { Heading } from "react-bulma-components";

const Header = ({ headerData }) => {
    return (
        <header>
            <Heading>Employee List</Heading>
            <Heading subtitle>
                Employees {headerData.from} to {headerData.to}
            </Heading>
        </header>
    );
};

export default Header;
