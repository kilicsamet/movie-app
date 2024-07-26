import React from 'react';
import { Spinner } from 'reactstrap';

const LoaderReport = () => {
    return (
        <React.Fragment>
            <div className="d-flex justify-content-center m-2 p-2"> <Spinner color="primary" size="sm"> Loading... </Spinner>
            </div>
        </React.Fragment>
    );
};


export default LoaderReport;
