import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/ShowProductsCopy.css'
import { Link } from 'react-router-dom';

const url = "http://localhost:5000/productos"

const EditProducts = () => {
  const [producto, setProducto] = useState([])
  const [nombre, setNombre] = useState("")
  const [precio, setPrecio] = useState(0.00)
  const [stock, setStock] = useState(0)
  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch(`http://localhost:5000/productos/?id=${id}`)
      .then(res => res.json())
      .then((data) => setProducto(data[0]))
  }, [id])

  const update = (event) => {
    event.preventDefault();
    let obj = JSON.stringify(
      {
        nombre: nombre,
        precio: Number(precio),
        stock: Number(stock),
        id: Number(id)
      }
    )
    fetch(`http://localhost:5000/productos`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: obj
    }).then(res => res.json()).then(data => console.log(data))
      redirect('/')
  }

  return (
    <div className="card">
      <h3>Editar producto</h3>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>{producto.nombre}</Card.Title>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{producto.stock}</ListGroup.Item>
          <ListGroup.Item>${producto.precio}</ListGroup.Item>
        </ListGroup>
        <Card.Body>
          <Link to='/' className="btn btn-primary">Volver</Link>
          {/* <button onClick={() => DeleteProduct(product.id)} className='btn btn-danger' >Eliminar</button> */}
        </Card.Body>
      </Card>
      <div className='container-fluid'>
        <h2>Elemento nuevo</h2>
        <div className='row mt-3'>
          <div className='col-12 col-lg-8 offset-0 offset-lg-2'>
            <div className='card'>
              <div className='card-header bg-dark text-white'>Editar Producto</div>
              <div className='card-body'>
                <form onSubmit={(event) => update(event)}>
                  <label htmlFor="">Nombre: </label>
                  <input type="text" id='nombre' maxLength='80' className='form-control' required={true} value={nombre} onChange={(e) => setNombre(e.target.value)} />
                  <label htmlFor="">Precio: </label>
                  <input type="number" id='precio' className='form-control' step={0.1} required={true} value={precio} onChange={(e) => setPrecio(e.target.value)} />
                  <label htmlFor="">Stock: </label>
                  <input type="number" id='stock' className='form-control' step={0.1} required={true} value={stock} onChange={(e) => setStock(e.target.value)} />
                  <button className='btn btn-success mt-3'>Guardar</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default EditProducts
