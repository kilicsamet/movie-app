import React from 'react';
import BreadcrumbComponent from '../Components/BreadCrumbComponent';
import { Card, CardBody, CardHeader, Col, Container, Input, Row, Button } from 'reactstrap';
import SearchFilter from '../Components/SearchFilter';
import LoaderReport from '../Components/LoaderReport';
import UncontrolledCollapses from '../Components/UncontrolledCollapses';
import { useMovieViewModel } from '../ViewModel/MovieViewModel';
import Pagination from '../Components/Pagination';

const MoviesList = () => {
  const {
    loading,
    error,
    movieYear,
    setSelectYear,
    selectYear,
    handleSearch,
    handleClear,
    search,
    handleInputChange,
    loadingSearch,
    movies,
    pages,
    page,
    setLoadingSearch,
    handleClickPage,
    navigate
  } = useMovieViewModel();

  if (loading) return <LoaderReport />;
  if (error) return <p>Error: {error}</p>;
  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>
          <Row>
            <Col xl={12}>
              <BreadcrumbComponent
                firstLink={"/"}
                firstLinkText={"Filmler"}
                secondLinkText={"Film Listesi"}
              />
            </Col>
          </Row>
          <Row className="justify-content-start m-4">
            <Col xl={3} lg={4}>
              <Card>
                <CardHeader style={{ zIndex: 9 }} >
                  <div className="d-flex mb-3 border-bottom">
                    <div className="flex-grow-1">
                      <h5 className="fs-16">{("Filtrele")}</h5>
                    </div>
                  </div>
                </CardHeader>
                <div className="accordion accordion-flush">
                  <UncontrolledCollapses movieYear={movieYear} setSelectYear={setSelectYear} />
                  <SearchFilter title={"Yıl"} type={"number"} placeHolder={"Yıla Göre Arama"} setSelectYear={setSelectYear} selectYear={selectYear} />
                  <div className="hstack gap-1 justify-content-end mt-2 mb-2 p-1">
                    <Button onClick={handleSearch} className='btn btn-success w-100'>Filterele</Button>
                    <Button onClick={handleClear} className='btn btn-danger w-100'>Temizle</Button>
                  </div>


                </div>
              </Card>
            </Col>
            <Col lg={9}>
              <Row>
                <Col lg={12} >
                  <div className="d-flex justify-content-between ">
                    <div className="m-2" style={{ width: "90%" }}>
                      <Input
                        placeholder={"Film Arama"}
                        className="form-control"
                        value={search}
                        onChange={handleInputChange}
                      />
                    </div>
                    <div className='m-2'>
                      <Button className='btn btn-success' onClick={handleSearch} style={{ minWidth: "120px" }}>Ara</Button>
                    </div>
                  </div>

                </Col>


                {
                  loadingSearch ? (
                    <LoaderReport />
                  ) : movies.length <= 0 ? (
                    <Col lg={3} md={4} sm={6} xs={12} className="d-flex align-items-center justify-content-center m-4 p-4" style={{ width: '100%', }}>
                      <div className="text-center">
                        <span>Veri Bulunamadı</span>
                      </div>
                    </Col>




                  ) : (
                    <>
               {     movies.map((movie, key) => (
                      <Col lg={3} md={4} sm={6} xs={12} key={key} className="mb-4">
                        
                        <Card onClick={()=> navigate(`/movie/${movie.imdbID}`)} className="d-flex align-items-center justify-content-center rounded-4">
                          <div className="card-img-container">
                            <img
                              src={movie.Poster}
                              alt={movie.Title}
                              className="card-img-top"
                              style={{ width: '100%', height: '500px', transition: 'opacity 0.5s ease' }}
                            />
                            <div className="card-img-overlay"></div>
                          </div>
                          <CardBody className="text-center">
                            <div className="text-truncate text-nowrap" style={{ maxWidth: "250px" }}>
                              <span>{movie.Title}</span>
                            </div>
                            <div className="text-truncate">
                              <span>{movie.Year}</span>
                              <span className="mx-2">|</span>
                              <span>{movie.imdbID}</span>
                            </div>
                          </CardBody>
                        </Card>
                      </Col>
                    ))}
                    < Pagination pages={pages} page={page} handleClickPage={handleClickPage} setLoadingSearch={setLoadingSearch} />

                    </>
                )
                  
                }

              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default MoviesList;
