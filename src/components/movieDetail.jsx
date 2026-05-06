import "./movieDetail.css"
function movieDetail({ pelicula }) {
  if (!pelicula) {
    return (
      <div style={{ textAlign: 'center', marginTop: '20px', color: '#888' }}>
        <p>Seleccioná una película para ver el detalle.</p>
      </div>
    )
  }

  return (
    <div className="movie-detail-container">
      <img src={pelicula.Poster} alt={pelicula.Title} />

      <div className="movie-detail-info">
        <h2>{pelicula.Title}</h2>
        <p><strong>Año:</strong> {pelicula.Year}</p>
        <p><strong>Género:</strong> {pelicula.Genre}</p>
        <p><strong>Director:</strong> {pelicula.Director}</p>
        <p><strong>Actores:</strong> {pelicula.Actors}</p>
        <p><strong>Sinopsis:</strong> {pelicula.Plot}</p>
        <p><strong>Duración:</strong> {pelicula.Runtime}</p>
        <p><strong>Idioma:</strong> {pelicula.Language}</p>
        <p><strong>País:</strong> {pelicula.Country}</p>
        <p><strong>Puntaje IMDb:</strong> {pelicula.imdbRating}</p>
      </div>
    </div>
  )
}

export default movieDetail