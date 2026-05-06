import MovieCard from "./movieCard"
import "./listaCard.css"
function listaCard({ peliculas, onSeleccionar }) {
  return (
    <div className="movies-grid">
      {peliculas.map((peli) => (
        <MovieCard
          key={peli.imdbID}
          pelicula={peli}
          onSeleccionar={onSeleccionar}
        />
      ))}
    </div>
  )
}

export default listaCard