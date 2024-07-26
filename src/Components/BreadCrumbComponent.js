import React from 'react';
import { useNavigate } from 'react-router-dom';

const BreadcrumbComponent = (props) => {
  const { firstLink, firstLinkText, secondLinkText } = props;
  const navigate = useNavigate(); 

  return (
    <div
      className="page-title-box d-sm-flex align-items-center justify-content-between m-2 border border-secondary rounded-2 p-3 ms-4 me-4"
      style={{
        background: 'linear-gradient(to right, #e0eafc, #cfdef3)',
        boxShadow: '1px 4px 3px rgba(0, 0, 0, 0.1)'
      }}
    >
      <h4 className="mb-sm-0">{secondLinkText}</h4>
      <div className="page-title-right">
        <ol className="breadcrumb m-0">
          <li onClick={()=>navigate(firstLink)} className="breadcrumb-item">
              {firstLinkText}
          </li>
          <li className="breadcrumb-item active">{secondLinkText}</li>
        </ol>
      </div>
    </div>
  );
}

export default BreadcrumbComponent;
