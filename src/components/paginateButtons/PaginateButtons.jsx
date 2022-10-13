import React from "react";
import "./PaginateButtons.css";
import { Pagination } from "react-bulma-components";

const PaginateButtons = ({ total, page, setPage }) => {
    return (
        <Pagination
            current={page}
            showFirstLast
            total={total}
            onChange={(current) => setPage(current)}
            size="small"
        />
    );
};

export default PaginateButtons;
