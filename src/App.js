import React, { useState } from "react";
import "./App.css";
import Header from "./components/header/Header";
import "bulma/css/bulma.min.css";
import { Box } from "react-bulma-components";
import EmployeeList from "./components/employeeList/EmployeeList";
import PaginateButtons from "./components/paginateButtons/PaginateButtons";
import data from "./helpers/data";
function App() {
    const [page, setPage] = useState(1);
    const totalPages = Math.trunc(data.length / 5);
    const splitArr = splitter(data);
    const headerData = {
        from: (page - 1) * 5 + 1,
        to: splitArr[page - 1].length + (page - 1) * 5,
    };
    return (
        <Box>
            <Header headerData={headerData} />
            <EmployeeList data={splitArr[page - 1]} />
            <PaginateButtons total={totalPages} page={page} setPage={setPage} />
        </Box>
    );
}

function splitter(arr, length = 5) {
    let result = [];
    let intermediateArray = [];
    arr.reverse().map((el, index) => {
        intermediateArray.push(el);

        if (index % length === 0) {
            result.push(intermediateArray.reverse());
            intermediateArray = [];
        }
    });
    return result.reverse();
}

export default App;
