import React from 'react'
import { Table } from 'reactstrap'

const MovieDetailTable = ({movieDetail}) => {
  return (
    <div className='m-4'>
    <Table bordered hover striped responsive className='bg-light'>
      <thead className='table-dark text-white'>
        <tr>
          <th className='text-center'>Başlık</th>
          <th className='text-center'>Bilgi</th>
        </tr>
      </thead>
      <tbody>
        <tr className='bg-info text-white'>
          <td><strong>Yönetmen</strong></td>
          <td>{movieDetail.Director}</td>
        </tr>
        <tr>
          <td><strong>Senarist</strong></td>
          <td>{movieDetail.Writer}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Tür</strong></td>
          <td>{movieDetail.Genre}</td>
        </tr>
        <tr>
          <td><strong>Dil</strong></td>
          <td>{movieDetail.Language}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Ülke</strong></td>
          <td>{movieDetail.Country}</td>
        </tr>
        <tr>
          <td><strong>Süre</strong></td>
          <td>{movieDetail.Runtime}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Oy</strong></td>
          <td>{movieDetail.Rated}</td>
        </tr>
        <tr>
          <td><strong>Gişe Hasılatı</strong></td>
          <td>{movieDetail.BoxOffice}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Ödüller</strong></td>
          <td>{movieDetail.Awards}</td>
        </tr>
        <tr>
          <td><strong>Metascore</strong></td>
          <td>{movieDetail.Metascore}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Konu</strong></td>
          <td>{movieDetail.Plot}</td>
        </tr>
        <tr>
          <td><strong>Oyuncular</strong></td>
          <td>{movieDetail.Actors}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Yapımcı</strong></td>
          <td>{movieDetail.Production}</td>
        </tr>
        <tr>
          <td><strong>DVD</strong></td>
          <td>{movieDetail.DVD}</td>
        </tr>
        <tr className='bg-light'>
          <td><strong>Web Sitesi</strong></td>
          <td>{movieDetail.Website}</td>
        </tr>
        <tr>
          <td><strong>Ratings</strong></td>
          <td>
            {movieDetail.Ratings.map((rating, index) => (
              <div key={index}>
                <strong>{rating.Source}:</strong> {rating.Value}
              </div>
            ))}
          </td>
        </tr>
      </tbody>
    </Table>
  </div>
  )
}

export default MovieDetailTable
