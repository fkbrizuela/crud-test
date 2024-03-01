import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import './styles/ShowProductsCopy.css'
import { Link } from 'react-router-dom';

const url = "https://fakestoreapi.com/products"

const EditProducts = () => {
  const [product, setProduct] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [category, setCategory] = useState("")
  const [price, setPrice] = useState(0)
  const redirect = useNavigate()
  const { id } = useParams()

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then((data) => setProduct(data))
  }, [id])

  const update = () => {
    let obj = JSON.stringify(
      {
        title: title,
        price: price,
        description: description,
        category: category
      }
    )
    fetch(`https://fakestoreapi.com/products/${id}`, {
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
    <div className="card">
      <h3>Editar producto</h3>
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>
            {product.description}
          </Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>{product.category}</ListGroup.Item>
          <ListGroup.Item>${product.price}</ListGroup.Item>
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
                <form onSubmit={update}>
                  <label htmlFor="">Nombre: </label>
                  <input type="text" id='titulo' maxLength='80' className='form-control' required={true} value={title} onChange={(e) => setTitle(e.target.value)} />
                  <label htmlFor="">Descripción: </label>
                  <input type="text" id='descripción' maxLength='150' className='form-control' required={true} value={description} onChange={(e) => setDescription(e.target.value)} />
                  <label htmlFor="">Categoria: </label>
                  <input type="text" id='categoria' maxLength='80' className='form-control' required={true} value={category} onChange={(e) => setCategory(e.target.value)} />
                  <label htmlFor="">Precio: </label>
                  <input type="number" id='precio' className='form-control' step={0.1} required={true} value={price} onChange={(e) => setPrice(e.target.value)} />
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