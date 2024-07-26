import React from 'react';
import BreadcrumbComponent from '../Components/BreadCrumbComponent';
import {Col, Container, Row } from 'reactstrap';
import LoaderReport from '../Components/LoaderReport';

import MovieDetailTable from '../Components/MovieDetailTable';
import MovieDetailPoster from '../Components/MovieDetailPoster';
import { useMovieDetailViewModel } from '../ViewModel/MovieDetailViewModel';


const MovieDetail = () => {
  const {
    loading,
    error,
    movieDetail
  } = useMovieDetailViewModel();
  if (loading) return <LoaderReport />;
  if (error) return <p>Error: {error}</p>;
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl={12}>
              <BreadcrumbComponent firstLink={"/"} firstLinkText={"Filmler"} secondLinkText={"Film Detayı"}
              />
            </Col>
          </Row>
          <Row>
            <Col lg={12}>
              <div className='d-flex justify-content-between align-items-center m-4'>
                <div className='fw-bold text-dark'>
                  {movieDetail.Title}
                </div>
                <div className='p-2 rounded-3' style={{ backgroundColor: "#6c757d" }}>
                  <span style={{ color: "#fff" }}>IMDB: </span>
                  {movieDetail.imdbRating + " (" + movieDetail.imdbVotes + ")"}
                </div>
              </div>
            </Col>
            <Col lg={4} >
            <MovieDetailPoster movieDetail={movieDetail}/>
            </Col>
            <Col lg={8} >
              <MovieDetailTable movieDetail={movieDetail} />
            </Col>

          </Row>

        </Container>
      </div>
    </React.Fragment>
  );
};

export default MovieDetail;
