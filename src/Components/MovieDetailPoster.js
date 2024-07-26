import React from 'react'

const MovieDetailPoster = ({movieDetail}) => {
  return (
    <div>
    <img
      src={movieDetail.Poster}
      alt={movieDetail.Title}
      className="card-img-top rounded-5 m-4"
      style={{ width: '100%', height: '750px', }}
    />
  </div>
  )
}

export default MovieDetailPoster
