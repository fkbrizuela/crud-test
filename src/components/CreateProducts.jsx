import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const url = "http://localhost:5000/productos"

const CreateProducts = () => {

  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0)
  const [stock, setStock] = useState(0.00)
  const redirect = useNavigate()

  const store = (e) => {
    e.preventDefault()
    let obj = JSON.stringify(
      {
        nombre: nombre,
        precio: Number(precio),
        stock: Number(stock)
      }
    )
    fetch(url, {
      method: "PUT",
      headers: {
          'Content-Type': 'application/json',
      },
      body: obj
    })
      .then(res => res.json())
      .then(data => console.log(data))
      redirect('/')
  }

  return (
    <div className='container-fluid'>
      <h2>Elemento nuevo</h2>
      <div className='row mt-3'>
        <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
          <div className='card'>
            <div className='card-header bg-dark text-white'>Añadir Producto</div>
            <div className='card-body'>
              <form onSubmit={store}>
                <label htmlFor="">Nombre: </label>
                <input type="text" id='titulo' maxLength='80' className='form-control' required={true} value={nombre} onChange={(e)=>setNombre(e.target.value) }/>
                <label htmlFor="">Precio: </label>
                <input type="number" id='precio' className='form-control' step={0.1} required={true} value={precio} onChange={(e)=>setPrecio(e.target.value) }/>
                <label htmlFor="">Stock: </label>
                <input type="number" id='precio' className='form-control' step={0.1} required={true} value={stock} onChange={(e)=>setStock(e.target.value) }/>
                <button className='btn btn-success mt-3'>Guardar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CreateProducts
