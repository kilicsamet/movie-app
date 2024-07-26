import React from 'react';
import { Button } from 'reactstrap';

function Pagination({ pages, page, handleClickPage, setLoadingSearch }) {
  const handlePageClick = async (num) => {
    setLoadingSearch(true);
    await handleClickPage(num);
  };
    if (pages?.length > 1) {
        return (
            <div style={{ display: 'flex', justifyContent: 'right', marginRight: '10px' }}>
                <div>
                    {pages.map(num => (
                        <Button
                            type="button"
                            className=""
                            style={{
                                border: 'none',
                                padding: '10px 15px',
                                margin: '2px',
                                backgroundColor: page === num ? '' : '#3577f111',
                                color: 'black'
                            }}
                            key={num}
                            onClick={() => handlePageClick(num)}
                        >
                            {num}
                        </Button>
                    ))}
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Pagination;
