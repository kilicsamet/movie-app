import React from 'react';
import {UncontrolledCollapse } from 'reactstrap';
import MovieYearButtons from './MovieYearButtons';

const UncontrolledCollapses = ({movieYear, setSelectYear}) => {
    return (
        <div className="accordion-item">
        <h2 className="accordion-header">
          <button
            className="accordion-button bg-transparent shadow-none"
            type="button"
            id="flush-year"
          >
            <span className="text-muted text-uppercase text-center fs-12 fw-medium">
              Tarih Seç
            </span>
          </button>
        </h2>
        <UncontrolledCollapse
          toggler="#flush-year"
          defaultOpen
        >

          <div
            id="flush-years"
            className="accordion-collapse collapse show"
            aria-labelledby="flush-headingBrands"
          >
                <MovieYearButtons movieYear={movieYear}  setSelectYear={setSelectYear}/>
             
          </div>
        </UncontrolledCollapse>
      </div>
    );
};

export default UncontrolledCollapses;
