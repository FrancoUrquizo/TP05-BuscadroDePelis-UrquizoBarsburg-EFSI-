import "./movieCard.css"
function MovieCard({ pelicula, onSeleccionar }) {
  return (
    <div className="movie-card">
      <img src={pelicula.Poster} alt={pelicula.Title} />
      
      <div className="movie-info">
        <h3>{pelicula.Title}</h3>
        <p>Año: {pelicula.Year}</p>
        <p>Tipo: {pelicula.Type}</p>

        <button onClick={() => onSeleccionar(pelicula.imdbID)}>
          Ver detalle
        </button>
      </div>
    </div>
  )
}

export default MovieCard