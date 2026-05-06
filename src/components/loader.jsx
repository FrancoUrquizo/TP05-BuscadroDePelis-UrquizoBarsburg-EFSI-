import "./loader.css"
function loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      <p style={{ textAlign: 'center', color: '#00d2ff' }}>Cargando...</p>
    </div>
  )
}

export default loader