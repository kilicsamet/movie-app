import React from 'react';
import { Button, Col, Row } from 'reactstrap';

const MovieYearButtons = ({ movieYear, setSelectYear }) => {
    return (
        <div className="accordion-body text-body pt-0">
              <Row>
            {movieYear?.map((year, key) => (
                <Col key={key} className="card-body border-bottom" lg={6} md={6} sm={4} xs={4}>
                    <div className="search-box">
                        <Button onClick={()=>setSelectYear(year)} className='btn btn-dark w-100 rounded-3'>
                            {year}
                        </Button>
                    </div>
                </Col>
            ))}
         </Row>
         </div>
    );
};

export default MovieYearButtons;
