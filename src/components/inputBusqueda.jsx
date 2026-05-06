import  "./inputBusqueda.css"
function InputBusqueda({ busqueda, setBusqueda }) {
  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Escribí una película o serie"
        value={busqueda}
        onChange={(e) => setBusqueda(e.target.value)}
      />
    </div>
  )
}

export default InputBusqueda