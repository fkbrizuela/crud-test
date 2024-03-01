import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Item from './Item';
import './styles/ShowProductsCopy.css'

const url = "http://localhost:5000/productos"

const ShowProductsCopy = () => {
  const [products, setProducts] = useState([])

  const getProducts = () =>
  {
    fetch(url)
      .then(res => res.json())
      .then((data) => setProducts(data))
  }

  useEffect(() => {
    /* getProducts() */
    getProducts()
  }, [])

  /*   const getProducts = async () => {
      const url = "https://fakestoreapi.com/products"
      const response = await axios.get(url)
      setProducts(response.data);
    } */

  /*   const deleteProducts = async (id) => {
      const params = { headers: { 'content-Type': 'application/json' }, data: { 'id': id } }
      await axios.delete(url, params);
      getProducts()
    } */
  const DeleteProduct = (id) => {
    let obj = JSON.stringify(
      {
        id: id
      }
    )
    fetch(`http://localhost:5000/productos`, {
      method: "DELETE",
      headers: {
          'Content-Type': 'application/json',
      },
      body: obj
    })
    setProducts(data =>
      data.filter(product => {
        return product.id !== id
      }),)
  }


  /*   console.log(products);
    console.log(products.map(product => product.title)); */
  return (
    <div className="container-fluid">
      <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-4">
            <div className='d-grid mx-au'>
              <h2>ShowProducts</h2>
              <Link to='/create' className='btn btn-dark'>Añadir</Link>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        {products.map((product) => <Item key={product.id} product={product} DeleteProduct={DeleteProduct} />)}
      </div>
    </div>
    /*     <div className="container-fluid">
        <div className="row mt-3">
          <div className="col-md-4 offset-4">
            <div className='d-grid mx-au'>
              <h2>ShowProducts</h2>
              <Link to='/create' className='btn btn-dark'>Añadir</Link>
            </div>
          </div>
        </div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
          <Card.Body>
            <Card.Link href="#">Card Link</Card.Link>
            <Card.Link href="#">Another Link</Card.Link>
          </Card.Body>
        </Card>
        <ul>
          {products.map(el => <li key={el.id} >{el.title}<Link to={`/edit/${el.id}`} className='btn btn-warning'>Editar</Link></li>)}
        </ul>
      </div> */
  )
}
export default ShowProductsCopy
