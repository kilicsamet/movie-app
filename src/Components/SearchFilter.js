import React from 'react';
import { Input } from 'reactstrap';

const SearchFilter = ({title, type, placeHolder,setSelectYear, selectYear }) => {
    return (
        <div className="card-body border-bottom">
            <div>
                <p className="text-muted text-uppercase fs-12 fw-medium mb-2">
                    {title}
                </p>
                <div className="search-box">
                    <Input
                        type={type}
                        value={selectYear}
                        className="form-control"
                        placeholder={placeHolder}
                        onChange={(e)=>setSelectYear(e.target.value)}
                    />
                    <i className="ri-search-line search-icon"></i>
                </div>
            </div>
        </div>
    );
};

export default SearchFilter;
